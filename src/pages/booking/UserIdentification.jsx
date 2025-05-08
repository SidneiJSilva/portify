import Button from "@/components/ui/buttons/Button";
import InputText from "@/components/ui/inputs/InputText";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserIdentification() {
	const navigate = useNavigate();

	const [indentification, setIdentification] = useState("");

	return (
		<div className="flex flex-1 items-center justify-center ">
			<div className="text-center space-y-4">
				<div className="text-xl">Identificar-se por</div>

				<div className="space-y-2">
					<InputText
						value={indentification}
						placeholder="Email ou telefone"
						onChange={(e) => setIdentification(e.target.value)}
					/>

					<Button
						disabled={!indentification}
						className="w-full"
						onClick={() => navigate("/confirmation-code")}
					>
						OK
					</Button>
				</div>

				<p>OU</p>

				<Button
					className="w-full"
					onClick={() =>
						navigate("/login", { state: { redirectTo: "/booking" } })
					}
				>
					LOGIN
				</Button>
			</div>
		</div>
	);
}
