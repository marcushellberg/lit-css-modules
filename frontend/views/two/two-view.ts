import { css, customElement, html, LitElement } from "lit-element";

@customElement("two-view")
export class TwoView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--lumo-space-m);
      }
    `;
  }

  render() {
    return html`
      <h1>View Two</h1>

      <div class="warning">This is a warning.</div>
    `;
  }
}
