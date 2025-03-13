import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./container/HomeLayout";
import Home from "./pages/Home";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
