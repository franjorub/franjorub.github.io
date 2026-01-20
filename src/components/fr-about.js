import './fr-section-header.js';

/**
 * About section component with description, stats, and ASCII art
 */
class FrAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="scroll-mt-20" id="about">
        <fr-section-header number="01" title="READ_ME.md"></fr-section-header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="space-y-4">
            <p class="opacity-90">
              I am a proactive problem solver and mentor specializing in architecting scalable solutions.
              With years of deep-dive experience in the JavaScript ecosystem, I build systems that bridge
              the gap between user experience and engineering excellence.
            </p>
            <div class="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div class="border border-terminal-dim p-2 hover:border-terminal-green transition-colors group">
                <div class="text-xs opacity-90 group-hover:text-terminal-green">EXP_YRS</div>
                <div class="text-xl">8+</div>
              </div>
              <div class="border border-terminal-dim p-2 hover:border-terminal-green transition-colors group">
                <div class="text-xs opacity-90 group-hover:text-terminal-green">PROJECTS</div>
                <div class="text-xl">20+</div>
              </div>
              <div class="border border-terminal-dim p-2 hover:border-terminal-green transition-colors group">
                <div class="text-xs opacity-90 group-hover:text-terminal-green">COMMIT</div>
                <div class="text-xl">100%</div>
              </div>
            </div>
          </div>
          <div class="border border-terminal-dim p-4 flex items-center justify-center bg-black">
            <pre class="text-[10px] md:text-xs text-terminal-green/90 leading-none"> ______   _____  
|  ____| |  __ \\ 
| |__    | |__) |
|  __|   |  _  / 
| |      | | \\ \\ 
|_|      |_|  \\_\\
            </pre>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('fr-about', FrAbout);
