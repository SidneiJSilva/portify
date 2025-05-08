import Button from "@/components/ui/buttons/Button";

import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<div className="text-center space-y-4">
				<Button size="large" onClick={() => navigate("/user-identification")}>
					Marcação
				</Button>
			</div>
		</div>
	);
}
