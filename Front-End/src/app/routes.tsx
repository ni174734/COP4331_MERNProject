import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Store } from "./components/Store";
import { SignUp } from "./components/SignUp";
import { VerifyEmail } from "./components/VerifyEmail";
import { Login } from "./components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Store },
      { path: "signup", Component: SignUp },
      { path: "verify-email", Component: VerifyEmail },
      { path: "login", Component: Login },
    ],
  },
]);
