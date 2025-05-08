import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const UserDashboard = lazy(() =>
	import("../pages/user-dashboard/UserDashboard")
);
const Scheduling = lazy(() => import("../pages/scheduling/Scheduling"));
const Booking = lazy(() => import("../pages/booking/Booking"));
const UserIdentification = lazy(() =>
	import("../pages/booking/UserIdentification")
);
const ConfirmationCode = lazy(() =>
	import("../pages/booking/ConfirmationCode")
);

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/dashboard",
				element: <UserDashboard />,
			},
			{
				path: "/scheduling",
				element: <Scheduling />,
			},
			{
				path: "/booking",
				element: <Booking />,
			},
			{
				path: "/user-identification",
				element: <UserIdentification />,
			},
			{
				path: "/confirmation-code",
				element: <ConfirmationCode />,
			},
		],
	},
]);

export default router;
