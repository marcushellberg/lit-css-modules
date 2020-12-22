import { css, customElement, html, LitElement } from 'lit-element';

@customElement('two-view')
export class TwoView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`<div>Content placeholder</div>`;
  }
}
