import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ExpandableCard = ({ title, children }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="max-w-md mx-auto my-2 shadow-lg border border-gray-300 rounded overflow-hidden transition-all duration-300 ">
			<div
				className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer"
				onClick={() => setExpanded((prev) => !prev)}
			>
				<h2 className="text-lg font-semibold">{title}</h2>

				{expanded ? (
					<FiChevronUp className="text-xl text-gray-600" />
				) : (
					<FiChevronDown className="text-xl text-gray-600" />
				)}
			</div>

			{expanded && (
				<div className="p-4 bg-white border-t border-gray-200">{children}</div>
			)}
		</div>
	);
};

export default ExpandableCard;
