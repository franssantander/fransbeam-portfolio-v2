import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./container/HomeLayout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
