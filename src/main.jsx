import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Layout/Root";
import ErrorPage from "./Components/Pages/ErrorPage";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Components/Pages/Login";
import AddCraft from "./Components/AddCraft";
import MyCraft from "./Components/Pages/MyCraft";
import ViewDetails from "./Components/Pages/ViewDetails";
import PrivateRoute from "./Components/PrivateRoute";
import UpdateCraft from "./Components/Pages/UpdateCraft";
import Contact from "./Components/Contact";
import About from "./Components/About";
import AllCraft from "./Components/Pages/AllCraft";
import Blog from "./Components/Blog";
import Profile from "./Components/Pages/Profile";
import EditProfile from "./Components/Pages/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://artistic-aura-server.vercel.app/craft"),
        // loader: () => fetch("localhost:5000/craft"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-craft",
        element: (
          <PrivateRoute>
            <MyCraft></MyCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-user",
        element: (
          <PrivateRoute>
            <EditProfile></EditProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) =>
          fetch(`https://artistic-aura-server.vercel.app/craft/${params.id}`),
      },
      {
        path: "/view-details/:_id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://artistic-aura-server.vercel.app/craft"),
      },
      {
        path: "/all-craft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("https://artistic-aura-server.vercel.app/craft"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
