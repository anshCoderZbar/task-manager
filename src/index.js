import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "queryClient";
import { Store } from "store/Store";
import { NotificationsProvider } from "reapop";
import { Notification } from "components/notification";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <Notification />
        <Store>
          <App />
        </Store>
      </NotificationsProvider>
    </QueryClientProvider>
  </React.Fragment>
);
