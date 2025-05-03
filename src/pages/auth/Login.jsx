import Card from "../../components/ui/cards/Card";
import InputText from "../../components/ui/inputs/InputText";
import Button from "../../components/ui/buttons/Button";

import { users } from "../../data/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const resetFields = () => {
		setEmail("");
		setPassword("");
	};

	const loginUser = (e) => {
		e.preventDefault();

		const foundUser = users.find((user) => user.email === email);

		if (foundUser) {
			navigate("/dashboard");
		} else {
			alert("Usuário ou senha inválidos");
			resetFields();
		}
	};

	return (
		<div className="flex flex-1 items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<div className="text-center space-y-4">
					<h3 className="text-xl font-semibold mb-3">Login</h3>

					<form onSubmit={loginUser} className="space-y-4">
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

						<Button type="submit" fullWidth disabled={!email || !password}>
							ACEDER
						</Button>
					</form>
				</div>
			</Card>
		</div>
	);
}
