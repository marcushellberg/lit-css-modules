import { customElement, html } from "lit-element";
import "@vaadin/vaadin-text-field";
import { View } from "../view";
import styles from "./one-view.module.css";

@customElement("one-view")
export class OneView extends View {
  render() {
    return html`
      <h1>View One</h1>

      <p class=${styles.another}>Here is some text as an example</p>

      <vaadin-text-field label="Enter some text"></vaadin-text-field>

      <div class="warning">This is a warning.</div>
    `;
  }
}
