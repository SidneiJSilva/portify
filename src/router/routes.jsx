import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import UserDashboard from "../pages/user-dashboard/UserDashboard";
import Scheduling from "../pages/scheduling/Scheduling";

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
		],
	},
]);

export default router;
