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
        <div class="relative pl-6 border-l border-terminal-dim">
          <div class="absolute -left-1.5 top-0 w-3 h-3 ${exp.isActive ? 'bg-terminal-green' : 'bg-terminal-dim'}"></div>
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
  }
}

customElements.define('fr-experience', FrExperience);
