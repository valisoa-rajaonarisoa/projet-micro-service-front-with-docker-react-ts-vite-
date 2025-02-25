import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MembrePage = React.lazy(() => import("membreApp/MembrePage" as string));

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/membre",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MembrePage />
      </Suspense>
    ),
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
