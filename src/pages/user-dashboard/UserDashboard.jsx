import Button from "@/components/ui/buttons/Button";
import Card from "@/components/ui/cards/Card";

import { accessibleAreasByRole } from "../../data/userAreas";
import { useMemo, useState } from "react";
import { users, userTypes } from "@/data/users";

export default function UserDashboard() {
	const [selectedUserType, setSelectedUserType] = useState(1);

	const user = useMemo(() => {
		return users.find((user) => user.type === selectedUserType);
	}, [selectedUserType]);

	return (
		<div className="p-4">
			<h3 className="text-xl font-semibold ">Dashboard do Usuário</h3>
			<p className="mb-3">Perfil {user.name}</p>

			<div className="flex mb-3">
				{userTypes.map((userType) => (
					<div key={userType.value} className="flex flex-col items-center mr-4">
						<Button onClick={() => setSelectedUserType(userType.value)}>
							{userType.label}
						</Button>
					</div>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-6 gap-2">
				{accessibleAreasByRole[selectedUserType].map((area) => (
					<Card key={area} className="cursor-pointer md:hover:bg-blue-100">
						{area}
					</Card>
				))}
			</div>
		</div>
	);
}
