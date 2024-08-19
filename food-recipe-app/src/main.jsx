import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/Root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import Detail from "./pages/Detail.jsx";
import GlobalState from "./context/GlobalContext.jsx";
import { loadDetails } from "./pages/Detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // default route "/"
        element: <Home />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
        loader: loadDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  </StrictMode>
);
