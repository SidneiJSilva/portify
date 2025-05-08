import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navigator({ label, to }) {
	const navigate = useNavigate();

	return (
		<div
			className="flex items-center gap-2 cursor-pointer"
			onClick={() => navigate(to)}
		>
			<IoIosArrowBack size={20} />

			<p className="text-xl">{label}</p>
		</div>
	);
}
