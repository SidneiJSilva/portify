import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export function Header() {
	const navigate = useNavigate();

	const handleClick = (path) => {
		navigate(path, { state: { from: "header" } });
	};

	return (
		<header className="justify-between fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-10 flex items-center px-4">
			<h1
				className="text-lg font-semibold cursor-pointer"
				onClick={() => handleClick("/")}
			>
				Portify
			</h1>

			<VscAccount
				size={25}
				onClick={() => handleClick("/login")}
				className="cursor-pointer"
			/>
		</header>
	);
}
