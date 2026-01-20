import './fr-section-header.js';

/**
 * Experience section component with timeline of work history
 */
class FrExperience extends HTMLElement {
  constructor() {
    super();
    this.experiences = [
      {
        period: '2022-PRESENT',
        isActive: true,
        title: 'SENIOR_SOFTWARE_ENGINEER @ FULLSTACK_LABS',
        details: [
          'Deployed at MGM Resorts International; shipping next-gen UI features.',
          'Architecting micro-frontend solutions with React; optimizing performance.',
          'Driving accessibility enhancements across enterprise platforms.',
          'STACK: React, TypeScript, AWS, CI/CD',
        ],
      },
      {
        period: '2022',
        isActive: false,
        title: 'SENIOR_SOFTWARE_ENGINEER @ CORRA',
        details: [
          'Spearheaded frontend development for E-commerce sector challenges.',
          'Delivered new features aligned with complex business requirements.',
          'STACK: React, JavaScript, E-commerce platforms',
        ],
      },
      {
        period: '2019-2022',
        isActive: false,
        title: 'SENIOR_SOFTWARE_ENGINEER @ CRAZY_IMAGINE',
        details: [
          'Developed mobile and web applications within the React ecosystem.',
          'Led education program; mentored new developers on their learning path.',
          'STACK: React.js, React Native, JavaScript',
        ],
      },
      {
        period: '2020-2022',
        isActive: false,
        title: 'REACT_DEVELOPER @ STRACOS_LTD',
        details: [
          'Built healthcare software solutions; websites and mobile apps.',
          'Provided backend support with Node.js and MongoDB integrations.',
          'STACK: React, Node.js, MongoDB',
        ],
      },
      {
        period: '2019-2022',
        isActive: false,
        title: 'FREELANCE_DEVELOPER @ UPWORK',
        details: [
          'Top-rated status achieved (2020-2022) delivering quality projects.',
          'Specialized in React and React Native for diverse client needs.',
          'STACK: React, React Native, JavaScript',
        ],
      },
      {
        period: '2019',
        isActive: false,
        title: 'REACT_NATIVE_DEVELOPER @ JELLIFIN',
        details: [
          'Shipped TiltChat mobile app to App Store and Google Play.',
          'Built real-time crypto streaming features for mobile platform.',
          'STACK: React Native, JavaScript',
        ],
      },
      {
        period: '2018-2019',
        isActive: false,
        title: 'WEB_DEVELOPER @ BITECLA_SISTEMAS',
        details: [
          'Created web apps using Loopback, AngularJS, and Jekyll.',
          'Managed styling with Bootstrap 4 and SASS preprocessor.',
          'STACK: AngularJS, Loopback, Jekyll, SASS',
        ],
      },
    ];
  }

  connectedCallback() {
    const experienceItems = this.experiences
      .map(
        (exp) => `
        <div class="timeline-item relative pl-6 border-l border-terminal-dim transition-colors duration-300">
          <div class="timeline-marker absolute -left-1.5 top-0 w-3 h-3 bg-terminal-dim transition-colors duration-300 shadow-none"></div>
          <div class="mb-2">
            <span class="text-terminal-green/70">[${exp.period}]</span>
            <h3 class="text-lg font-bold">${exp.title}</h3>
          </div>
          <div class="bg-black border border-terminal-dim p-4 text-sm leading-relaxed">
            ${exp.details.map((detail) => `[stdout] ${detail}<br />`).join('')}
          </div>
        </div>
      `
      )
      .join('');

    this.innerHTML = `
      <section class="scroll-mt-20" id="experience">
        <fr-section-header number="03" title="DEPLOYMENT_LOGS"></fr-section-header>
        <div class="space-y-12">
          ${experienceItems}
        </div>
      </section>
    `;

    this.setupIntersectionObserver();
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when element is near center/viewport
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const marker = target.querySelector('.timeline-marker');

        if (entry.isIntersecting) {
          // Element is in view: highlight it
          this.highlightItem(target, marker);
        } else {
          // Element is out of view
          // If rootBounds is available, use it to determine exit direction
          // Fallback to 0 if not (though rootBounds usually exists with defaults)
          const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;

          if (entry.boundingClientRect.top < rootTop) {
            // Exited via top (scrolling down): keep it highlighted
            this.highlightItem(target, marker);
          } else {
            // Exited via bottom (scrolling up): dim it
            this.dimItem(target, marker);
          }
        }
      });
    }, options);

    const items = this.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      this.observer.observe(item);
    });
  }

  highlightItem(item, marker) {
    if (item) {
      item.classList.remove('border-terminal-dim');
      item.classList.add('border-terminal-green');
    }
    if (marker) {
      marker.classList.remove('bg-terminal-dim');
      marker.classList.add('bg-terminal-green');
      marker.classList.add('shadow-[0_0_10px_rgba(0,255,65,0.5)]');
    }
  }

  dimItem(item, marker) {
    // Don't dim the first item if we want it to stay lit at the top? 
    // Actually the user wants "only the first one remaining". 
    // If we are at the top, the first one is visible, so it stays highlighted. 
    // This logic is naturally handled by isIntersecting=true for the first item when at top.

    if (item) {
      item.classList.remove('border-terminal-green');
      item.classList.add('border-terminal-dim');
    }
    if (marker) {
      marker.classList.remove('bg-terminal-green');
      marker.classList.remove('shadow-[0_0_10px_rgba(0,255,65,0.5)]');
      marker.classList.add('bg-terminal-dim');
    }
  }
}

customElements.define('fr-experience', FrExperience);
