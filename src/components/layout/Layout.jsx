import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen bg-white text-gray-800">
			<Header />

			<main className="flex-1 flex flex-col mt-14 pb-safe">
				<div className="w-full max-w-7xl mx-auto">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
