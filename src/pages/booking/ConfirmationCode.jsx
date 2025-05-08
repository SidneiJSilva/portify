import Button from "@/components/ui/buttons/Button";
import InputText from "@/components/ui/inputs/InputText";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ConfirmationCode() {
	const navigate = useNavigate();
	const [confirmationCode, setConfirmationCode] = useState("");

	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<div className="text-center space-y-4">
				<div className="text-xl">Insira o código recebido</div>

				<div className="space-y-2">
					<InputText
						placeholder="Código de confirmação"
						value={confirmationCode}
						onChange={(e) => setConfirmationCode(e.target.value)}
					/>

					<p
						className="text-xs text-blue-500 cursor-pointer"
						onClick={() => alert("Resolver captcha")}
					>
						Reenviar código
					</p>
				</div>

				<Button
					disabled={!confirmationCode}
					className="w-full mt-10"
					onClick={() => navigate("/booking")}
				>
					Validar
				</Button>
			</div>
		</div>
	);
}
