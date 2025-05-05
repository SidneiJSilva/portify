import Card from "@/components/ui/cards/Card";

import { accessibleAreasByRole } from "../../data/userAreas";
import { useMemo } from "react";
import { users, userTypes } from "@/data/users";
import { pt } from "@/translations/pt";

export default function UserDashboard() {
	const userEmail = localStorage.getItem("portify-user");

	const user = useMemo(() => {
		return users.find((user) => user.email === userEmail);
	}, [userEmail]);

	const userType = useMemo(() => {
		return userTypes.find((userType) => userType.value === user.type);
	}, [user]);

	return (
		<div className="p-4">
			<h3 className="text-xl font-semibold ">Dashboard do Usuário</h3>
			<p className="mb-3">
				{user.name} - {userType.label}
			</p>

			<div className="grid grid-cols-1 md:grid-cols-6 gap-2">
				{accessibleAreasByRole[user.type].map((area) => (
					<Card key={area} className="cursor-pointer md:hover:bg-blue-100">
						{pt[area] || area}
					</Card>
				))}
			</div>
		</div>
	);
}
