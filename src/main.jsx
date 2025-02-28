import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ZooCages from "./pages/ZooCages.jsx";
import Animals from "./pages/Animals.jsx";
import Areas from "./pages/Areas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/zoo-cages",
        element: <ZooCages />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/areas",
        element: <Areas />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
