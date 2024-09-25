import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/fonts/fonts.css";
import "./assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import reactQueryConfigs from "./configs/reactQuery.js";

const queryClient = new QueryClient(reactQueryConfigs);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
