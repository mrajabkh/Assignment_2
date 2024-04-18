import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styling.css";

import App from "./App";



const main = createRoot(document.getElementById("main"));
main.render(
  <StrictMode>
    <App />
  </StrictMode>
);



//-g parcel
//react-router-dom