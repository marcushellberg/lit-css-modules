import { css, customElement, html } from "lit-element";
import { View } from "../view";

@customElement("two-view")
export class TwoView extends View {
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
      <p>Hello</p>
      <div class="warning">This is a warning.</div>
    `;
  }
}
