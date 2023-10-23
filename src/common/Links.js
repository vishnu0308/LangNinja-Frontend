import React from "react";
import Error404 from "../pages/404";
import AdminPage from "../pages/admin";
import LandingPage from "../pages/landing";
import Signup from "../pages/signup";
import VerifyUserEmail from "../pages/Verifyemail";
import SignIn from "../pages/SignIn";
import Success from "../pages/loginSuccess";
import LanguageInfoPage from "../pages/languageInfo";
import QuizPage from "../pages/Quiz.js";
import MyStats from "../pages/MyStats";
import Leaderboard from "../pages/Leaderboard";
import Settings from "../pages/Settings";

export const Links = [
    {
        name: "Landing",
        path: "/",
        element: <LandingPage />,
        showInNavigation: true,
    },
    {
        name: "Signup",
        path: "/signup",
        element: <Signup />,
        showInNavigation: true,
    },
    {
        name: "Verify",
        path: "/verifyemail",
        element: <VerifyUserEmail />,
        showInNavigation: true,
    },
    {
        name: "Admin",
        path: "/admin",
        element: <AdminPage />,
        showInNavigation: true,
    },
    {
        name: "SignIn",
        path: "/signin",
        element: <SignIn />,
        showInNavigation: true,
    },
    {
        name: "LoginSuccess",
        path: "/login-success",
        element:<Success />,
        showInNavigation: true,
    },
    {
        name: "LanguageInfo",
        path: "/info",
        element:<LanguageInfoPage />,
        showInNavigation: true,
    },
    {
        name: "QuizPage",
        path: "/quiz",
        element:<QuizPage />,
        showInNavigation: true,
    },
    {
        name: "MyStats",
        path: "/stats",
        element:<MyStats />,
        showInNavigation: true,
    },
    {
        name: "Leaderboard",
        path: "/leaderboard",
        element:<Leaderboard />,
        showInNavigation: true,
    },
    {
        name: "Settings",
        path: "/settings",
        element:<Settings />,
        showInNavigation: true,
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: true,
    }
];
