import { Router } from "@vaadin/router";
import { routes } from "./routes";
import "@vaadin/vaadin-lumo-styles/all-imports";
import "./styles/styles.css";

export const router = new Router(document.querySelector("#outlet"));
router.setRoutes(routes);
