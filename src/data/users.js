export const users = [
	{
		id: 1,
		name: "John Doe",
		email: "teste1@email.com",
		type: 1,
	},
	{
		id: 2,
		name: "Jane Doe",
		email: "teste2@email.com",
		services: [
			{ id: 1, label: "haircut" },
			{ id: 2, label: "nail" },
			{ id: 3, label: "beard" },
		],
		servicesTo: ["Female", "Male"],
		type: 2,
	},
	{
		id: 3,
		name: "John Smith",
		email: "teste3@email.com",
		type: 3,
	},
	{
		id: 4,
		name: "Jane Smith",
		email: "teste4@email.com",
		type: 3,
	},
	{
		id: 5,
		name: "Susan Dole",
		email: "teste5@email.com",
		services: [
			{ id: 1, label: "haircut" },
			{ id: 2, label: "nail" },
		],
		servicesTo: ["Female"],
		type: 2,
	},
	{
		id: 6,
		name: "Mike Ross",
		email: "teste26@email.com",
		services: [
			{ id: 1, label: "haircut" },
			{ id: 3, label: "beard" },
		],
		servicesTo: ["Male"],
		type: 2,
	},
];

export const userTypes = [
	{ value: 1, label: "Dono" },
	{ value: 2, label: "Prestador de serviço" },
	{ value: 3, label: "Cliente" },
];
