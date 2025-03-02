import Login from "./login";
import Browse from "./browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../utils/appstore";

const body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Provider store = {store}>
      <RouterProvider router={appRouter} />
      </Provider>
    
    </div>
  );
};

export default body;
