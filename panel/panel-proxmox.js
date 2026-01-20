class ProxmoxPanel extends HTMLElement {
  set hass(hass) {
    this.innerHTML = `
      <ha-card header="Proxmox Dashboard">
        <div style="padding: 16px;">
          <p>Panel Proxmox cargado correctamente.</p>
          <p>Versión del panel: 1.0.0</p>
        </div>
      </ha-card>
    `;
  }
}

customElements.define("proxmox-panel", ProxmoxPanel);

