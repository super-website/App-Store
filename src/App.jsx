import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import SinglePage from "./pages/SinglePage";
import Faqs from "./components/Faqs";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: "true",
        element: <Landing />,
      },
      {
        path: "app/:id",
        element: <SinglePage />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} scrollTop={0} />;
};

export default App;
