/**
 * Footer component with copyright and system stats
 */
class FrFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="mt-24 pt-8 border-t border-terminal-dim flex flex-col md:flex-row justify-between items-center text-[10px] opacity-90 uppercase tracking-widest gap-4">
        <div>© ${currentYear} FRANCISCO_RUBIAL | ALL_SYSTEMS_GO</div>
        <div class="flex gap-4">
          <span>MEM_USAGE: 42MB</span>
          <span>CPU_IDLE: 98%</span>
          <span>LATENCY: 12ms</span>
        </div>
      </footer>
    `;
  }
}

customElements.define('fr-footer', FrFooter);
