import { useState, useRef, useEffect } from "react";

const SelectInput = ({
	options = [],
	value = "",
	onChange,
	placeholder = "Selecione uma opção",
	className = "",
	disabled = false,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const selectRef = useRef(null);

	// Fechar dropdown ao clicar fora
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (selectRef.current && !selectRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Atualizar opção selecionada quando o value muda
	useEffect(() => {
		if (value) {
			const option = options.find((opt) => opt.value === value);
			setSelectedOption(option);
		} else {
			setSelectedOption(null);
		}
	}, [value, options]);

	const handleSelect = (option) => {
		onChange({ target: { value: option.value } });
		setIsOpen(false);
	};

	return (
		<div ref={selectRef} className={`relative w-full ${className}`}>
			{/* Input que simula o select */}
			<div
				onClick={() => !disabled && setIsOpen(!isOpen)}
				className={`
          w-full px-4 py-2
          border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
          text-gray-700
          ${
						disabled
							? "bg-gray-100 cursor-not-allowed"
							: "bg-white cursor-pointer"
					}
          flex items-center justify-between
        `}
			>
				<span className={`${!selectedOption ? "text-gray-400" : ""}`}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<svg
					className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
						isOpen ? "transform rotate-180" : ""
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>

			{/* Dropdown customizado */}
			{isOpen && (
				<div
					className="
          absolute z-50 w-full mt-1
          bg-white border border-gray-200 rounded-lg
          shadow-lg overflow-hidden
          animate-fadeIn
        "
				>
					<div className="max-h-60 overflow-y-auto">
						{options.map((option) => (
							<div
								key={option.value}
								onClick={() => handleSelect(option)}
								className={`
                  px-4 py-2 cursor-pointer
                  hover:bg-blue-50
                  transition-colors duration-150
                  ${
										option.value === value
											? "bg-blue-100 text-blue-700"
											: "text-gray-700"
									}
                  flex items-center
                `}
							>
								{option.icon && (
									<span className="mr-2 text-gray-500">{option.icon}</span>
								)}
								{option.label}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SelectInput;
