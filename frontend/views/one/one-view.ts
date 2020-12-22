import { css, customElement, html, LitElement } from 'lit-element';

@customElement('one-view')
export class OneView extends LitElement {
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
