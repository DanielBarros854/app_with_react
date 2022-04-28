import { render } from "react-dom";
import Routers from "./routes";

const rootElement = document.getElementById("root");
render(
  <Routers />,
  rootElement
);
