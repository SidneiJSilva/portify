import SelectInput from "@/components/ui/select/SelectInput";
import Button from "@/components/ui/buttons/Button";

import { pt } from "@/translations/pt";
import { users } from "@/data/users";
import { useMemo, useState } from "react";
import { times } from "@/constants/dateTime";

export default function Scheduling() {
	// Services
	const [selectedService, setSelectedService] = useState("");

	const getServicesList = () => {
		const servicesUsers = users.filter((user) => user.type === 2);

		const serviceMap = new Map();

		servicesUsers.forEach((user) => {
			user.services?.forEach((service) => {
				serviceMap.set(service.id, service);
			});
		});

		return Array.from(serviceMap.values());
	};

	const servicesOptions = getServicesList();

	// Collaborators
	const [selectedCollaborator, setSelectedCollaborator] = useState("");

	const collaboratorsOptions = useMemo(() => {
		const filteredUsers = users.filter((user) =>
			user.services?.some((service) => service.id === selectedService)
		);

		const asdasd = filteredUsers.map(({ id, name }) => ({
			value: id,
			label: name,
		}));

		return asdasd;
	}, [selectedService]);

	// Date
	const today = new Date();
	const formattedDate = today.toISOString().split("T")[0];

	const [selectedDate, setSelectedDate] = useState(formattedDate);

	// Time
	const [selectedTime, setSelectedTime] = useState("");

	return (
		<div className="flex flex-col p-4 gap-12">
			<div className="text-center space-y-4">
				<h1 className="text-2xl">{pt["chooseAService"]}</h1>

				<div className="flex justify-center gap-2">
					{servicesOptions.map((service) => (
						<Button
							key={service.id}
							onClick={() => {
								setSelectedService(service.id);
								setSelectedCollaborator("");
							}}
							variant={
								!selectedService
									? "primary"
									: service.id === selectedService
									? "success"
									: "ghost"
							}
						>
							{pt[service.label] || service.label}
						</Button>
					))}
				</div>
			</div>

			{selectedService && (
				<div className="text-center space-y-4 px-10 md:px-100">
					<h1 className="text-2xl">{pt["chooseACollaborator"]}</h1>

					<SelectInput
						options={collaboratorsOptions}
						value={selectedCollaborator}
						onChange={(e) => setSelectedCollaborator(e.target.value)}
					/>
				</div>
			)}

			{selectedCollaborator && (
				<div className="text-center space-y-4 px-10 md:px-100">
					<h1 className="text-2xl">{pt["chooseADateAndTime"]}</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
						<div className="border p-2 border-gray-300 rounded">
							<input
								type="date"
								id="start"
								name="trip-start"
								value={selectedDate}
								min={formattedDate}
								max="2100-12-31"
								onChange={(e) => setSelectedDate(e.target.value)}
							/>
						</div>

						<SelectInput
							options={times}
							value={selectedTime}
							onChange={(e) => setSelectedTime(e.target.value)}
							placeholder={pt["selectATime"]}
						/>
					</div>
				</div>
			)}

			{selectedService &&
				selectedCollaborator &&
				selectedDate &&
				selectedTime && (
					<div className="text-center">
						<Button size="large">{pt["schedule"]}</Button>
					</div>
				)}
		</div>
	);
}
