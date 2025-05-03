import Card from "../../components/ui/cards/Card";
import InputText from "../../components/ui/inputs/InputText";
import SelectInput from "../../components/ui/select/SelectInput";
import Button from "../../components/ui/buttons/Button";
import { useState } from "react";
import { userTypes } from "../../data/users";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userType, setUserType] = useState("");

	const createUser = (e) => {
		e.preventDefault();
		console.log("Usuário criado:", { email, password, userType });
	};

	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<div className="text-center ">
					<h3 className="text-xl font-semibold mb-3">Registro</h3>

					<form onSubmit={createUser} className="space-y-4">
						<InputText
							type="text"
							placeholder="Digite seu nome"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="username"
						/>

						<InputText
							type="password"
							placeholder="Digite sua senha"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
						/>

						<SelectInput
							options={userTypes}
							value={userType}
							onChange={(e) => setUserType(e.target.value)}
							placeholder="Selecione um perfil"
						/>

						<Button type="submit" fullWidth>
							SALVAR
						</Button>
					</form>
				</div>
			</Card>
		</div>
	);
}
