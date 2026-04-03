import { createBrowserRouter } from "react-router";
import { Root } from "./components/ui/Root";
import { Store } from "./components/ui/Store";
import { SignUp } from "./components/ui/SignUp";
import { VerifyEmail } from "./components/ui/VerifyEmail";
import { Login } from "./components/ui/Login";

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
