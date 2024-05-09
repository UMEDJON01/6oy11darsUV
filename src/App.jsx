import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProtectedRoutes from "./components";

import MyLayout from "./layout/MyLayout";
import { Navbar, Footer } from "./components";
import { Home, About, Contact, Signup, Login, Create } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MyLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider />;
}

export default App;
