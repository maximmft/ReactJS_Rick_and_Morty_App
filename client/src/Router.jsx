import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import axios from 'axios'
import DetailPage from "./components/pages/DetailPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: () => axios.get(`https://rickandmortyapi.com/api/character/`),
          index: true,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/detail/:id",
          element: <DetailPage />,
          loader: ({params}) => axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        }
      ]
    }
  ]
);

export default router;