import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AddToCartProvider from "../components/pages/CartContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddToCartProvider>
      <App />
    </AddToCartProvider>
  </StrictMode>
);
