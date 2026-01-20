/**
 * Header component with system version and status indicator
 */
import { version } from '../../package.json';

class FrHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="mb-12 border-b border-terminal-dim pb-4">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div class="text-xs opacity-90 mb-1">SYSTEM_VERSION: ${version}-STABLE</div>
            <div class="text-xl font-bold tracking-tighter">FRANCISCO_RUBIAL_OS [v1.0]</div>
          </div>
          <div class="text-left md:text-right">
            <div class="text-xs opacity-90">LOCATION: CLOUD_NET</div>
            <div class="text-sm">STATUS: <span class="animate-pulse">ONLINE_AVAILABLE</span></div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('fr-header', FrHeader);
