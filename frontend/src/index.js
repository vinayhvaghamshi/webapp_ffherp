import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/index.css";
import App from "@/App";

// Served from a subpath on GitHub Pages (…/webapp_ffherp/), so the router and
// every asset URL have to sit under it. PUBLIC_URL is "" in development and
// "/webapp_ffherp" in the Pages build, so derive the basename from it.
const publicUrl = process.env.PUBLIC_URL || "";
const basename = (publicUrl.startsWith("http") ? new URL(publicUrl).pathname : publicUrl).replace(/\/$/, "") || undefined;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
