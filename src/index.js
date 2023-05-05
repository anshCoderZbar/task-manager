import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "queryClient";
import { Store } from "store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Store>
        <App />
      </Store>
    </QueryClientProvider>
  </BrowserRouter>
);
