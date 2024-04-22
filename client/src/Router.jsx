import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import App from "./App";
import DetailPage from "./components/pages/DetailPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
          loader: () => fetch("https://rickandmortyapi.com/api/character?page=1")
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "detail/:id",
          element: <DetailPage />,
          loader: ({ params }) => fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        }
      ],
    }
  ]
);

export default router;