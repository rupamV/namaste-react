import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppBody = () => {
  return(
      <div className="mainapp">
          <Header />
          <Outlet />
      </div> 
  )
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppBody />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/restaurants/:resId",
          element: <Menu/>
        }
      ],
      errorElement: <Error />
    },
  ]
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);