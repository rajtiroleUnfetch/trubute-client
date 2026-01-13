// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "@fontsource/merriweather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
            <Toaster
              position="top-right"
              gutter={12}
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#FFFFFF",
                  color: "#1F2937",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
                  fontSize: "0.9rem",
                },
                success: {
                  iconTheme: {
                    primary: "#1565C0", // ✅ blue tick
                    secondary: "#E3F2FD", // light blue circle
                  },
                  style: {
                    borderLeft: "4px solid #1565C0",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "#D32F2F",
                    secondary: "#FFEBEE",
                  },
                  style: {
                    borderLeft: "4px solid #D32F2F",
                  },
                },
              }}
            />
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
