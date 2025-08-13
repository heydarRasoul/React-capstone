import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AddToCartProvider from "./helper/CartContext";
import App from "./App";
import "../styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddToCartProvider>
      <App />
    </AddToCartProvider>
  </StrictMode>
);
