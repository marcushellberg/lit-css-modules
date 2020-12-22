import { css, customElement, html, LitElement } from "lit-element";
import "@vaadin/vaadin-text-field";

@customElement("one-view")
export class OneView extends LitElement {
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
      <h1>View One</h1>

      <p>Here is some text as an example</p>

      <vaadin-text-field label="Enter some text"></vaadin-text-field>

      <div class="warning">This is a warning.</div>
    `;
  }
}
