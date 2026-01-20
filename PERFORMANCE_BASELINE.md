# Performance Baseline: Hero Glow Animation

## Optimization Target
**Component:** `fr-hero`
**Element:** `.hero-box`
**Property:** `box-shadow` animation

## Current Implementation Analysis
The current implementation animates the `box-shadow` property directly on the `.hero-box` element using a keyframe animation (`hero-glow`).

```css
@keyframes hero-glow {
  0%, 100% { box-shadow: ...; }
  50% { box-shadow: ...; }
}
```

### Performance Cost
Animating `box-shadow` is computationally expensive because it triggers the **Paint** stage of the rendering pipeline on every frame of the animation.
- **Layout**: In some cases, it can trigger layout, though usually just paint.
- **Paint**: The browser has to calculate the shadow blur and spread for every pixel involved in the shadow on every frame.
- **Composite**: The painted bitmap is then uploaded to the GPU.

Running this infinitely means the browser is constantly repainting this area, consuming CPU and GPU resources, potentially causing jank on lower-end devices or consuming battery on mobile devices.

## Proposed Optimization
We will move the shadow rendering to pseudo-elements (`::before` and `::after`) and animate their `opacity` property.

### Expected Benefits
Animating `opacity` (and `transform`) can be handled entirely by the **Compositor** thread on modern browsers.
- **No Layout/Paint**: Changing opacity does not require re-calculating geometry or repainting pixels if the element is promoted to its own layer.
- **GPU Acceleration**: The browser can upload the "High Glow" and "Low Glow" textures to the GPU once, and then simply adjust the alpha value during composition.

### Measurement Strategy
Due to the headless environment, we cannot capture a performance trace (Timeline recording) to show the reduction in "Paint" events. However, this is a well-established performance best practice.

**Reference:** [High Performance Animations](https://web.dev/articles/animations-guide)

We define the improvement as:
- **Before**: `box-shadow` changes per frame -> Continuous Repaints.
- **After**: `opacity` changes per frame -> Compositor-only updates (after initial paint).

This change shifts the workload from the Main Thread (Paint) to the Compositor Thread/GPU, ensuring 60fps animations even if the main thread is busy with JavaScript.
