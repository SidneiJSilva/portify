import Modal from "@/components/ui/modal/Modal";

import { pt } from "@/translations/pt";
import { useState } from "react";

export default function ServiceItem({ service }) {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div>
			<div
				className="flex justify-between items-center p-2 border-b rounded border-gray-200 cursor-pointer hover:bg-gray-100"
				onClick={() => setModalOpen(true)}
			>
				<div>
					<h3 className="text-lg font-semibold">{pt[service.label]}</h3>

					<p className="text-sm text-gray-500">{service.duration} minutos</p>
				</div>

				<span className="text-lg font-bold">€{service.price}</span>
			</div>

			<Modal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				title={pt[service.label]}
			>
				<p>Este é o conteúdo do modal.</p>
			</Modal>
		</div>
	);
}
