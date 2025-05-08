import ExpandableCard from "@/components/ui/cards/ExpandableCard";
import ServiceItem from "./ServiceItem";

import { users } from "@/data/users";

export default function ServicesList() {
	const getServicesGroupedByGroup = () => {
		const servicesUsers = users.filter((user) => user.type === 2);
		const serviceGroupMap = new Map();

		servicesUsers.forEach((user) => {
			user.services?.forEach((service) => {
				const { id, label, duration, price, groupId, groupLabel } = service;

				if (!groupId || !groupLabel) return;

				if (!serviceGroupMap.has(groupId)) {
					serviceGroupMap.set(groupId, {
						groupId,
						groupLabel,
						services: new Map(),
					});
				}

				const group = serviceGroupMap.get(groupId);
				group.services.set(id, { id, label, duration, price });
			});
		});

		return Array.from(serviceGroupMap.values()).map((group) => ({
			groupId: group.groupId,
			groupLabel: group.groupLabel,
			services: Array.from(group.services.values()),
		}));
	};

	const servicesOptions = getServicesGroupedByGroup();

	console.log(servicesOptions);

	return (
		<div>
			{servicesOptions.map((group) => (
				<ExpandableCard key={group.groupId} title={group.groupLabel}>
					{group.services.map((service) => (
						<ServiceItem key={service.id} service={service} />
					))}
				</ExpandableCard>
			))}
		</div>
	);
}
