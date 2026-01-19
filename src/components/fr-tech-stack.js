import './fr-section-header.js';

/**
 * Tech stack section component with grid of technologies
 */
class FrTechStack extends HTMLElement {
    constructor() {
        super();
        this.technologies = [
            { category: 'CORE_RUNTIME', name: 'React.js' },
            { category: 'LANG_SPEC', name: 'TypeScript' },
            { category: 'SERVER_SIDE', name: 'Node.js' },
            { category: 'FRAMEWORK', name: 'Next.js' },
            { category: 'INFRASTRUCTURE', name: 'AWS' },
            { category: 'DB_ENGINE', name: 'PostgreSQL' },
            { category: 'CONTAINER', name: 'Docker' },
            { category: 'API_LAYER', name: 'GraphQL' },
        ];
    }

    connectedCallback() {
        const techItems = this.technologies
            .map(
                (tech) => `
        <div class="border border-terminal-dim p-4 hover:border-terminal-green transition-colors group">
          <div class="text-xs mb-1 group-hover:text-terminal-green">${tech.category}</div>
          <div class="font-bold">${tech.name}</div>
        </div>
      `
            )
            .join('');

        this.innerHTML = `
      <section class="scroll-mt-20" id="stack">
        <fr-section-header number="02" title="SYSLOG_BINARIES"></fr-section-header>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          ${techItems}
        </div>
      </section>
    `;
    }
}

customElements.define('fr-tech-stack', FrTechStack);
