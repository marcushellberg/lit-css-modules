declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  import { CSSResult } from "lit-element";
  const content: CSSResult;
  export default content;
}
