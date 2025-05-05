import Button from "@/components/ui/buttons/Button";

import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<div className="text-center space-y-4">
				<h1 className="text-5xl text-blue-800 font-bold">HOME</h1>

				<Button size="large" onClick={() => navigate("/scheduling")}>
					Marcação
				</Button>
			</div>
		</div>
	);
}
