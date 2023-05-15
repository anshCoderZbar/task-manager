import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "queryClient";
import { Store } from "store/Store";
import { NotificationsProvider } from "reapop";
import { Notification } from "components/notification";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <NotificationsProvider>
      <Notification />
      <QueryClientProvider client={queryClient}>
        <Store>
          <App />
        </Store>
      </QueryClientProvider>
    </NotificationsProvider>
  </BrowserRouter>
);
