import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import AllRoutes from "./App";
import "./_app.scss";
import "./_base.scss";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <AllRoutes />
  </BrowserRouter>
);
