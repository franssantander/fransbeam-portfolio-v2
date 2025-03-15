import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "@/container/HomeLayout";
import Home from "@/pages/Home";
import Projects from "@/components/projects/Projects";
import Designs from "@/components/designs/Designs";
import AboutMe from "@/components/aboutme/AboutMe";

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
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/designs",
          element: <Designs />,
        },
        {
          path: "/about-me",
          element: <AboutMe />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
