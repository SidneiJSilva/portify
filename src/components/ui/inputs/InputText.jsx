const InputText = ({
	type = "text",
	placeholder = "",
	value = "",
	onChange,
	className = "",
	disabled = false,
	autoComplete,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			disabled={disabled}
			autoComplete={autoComplete}
			className={`
        w-full
        px-4 py-2
        border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-200
        text-gray-700
        placeholder-gray-400
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        ${className}
      `}
		/>
	);
};

export default InputText;
