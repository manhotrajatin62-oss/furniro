import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ProductContextProvider from "./context/ProductContext.tsx";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./context/LoginContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
