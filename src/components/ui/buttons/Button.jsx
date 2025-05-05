import React from "react";

const Button = ({
	children,
	type = "button",
	onClick,
	disabled = false,
	variant = "primary",
	size = "medium",
	fullWidth = false,
	className = "",
	iconLeft,
	iconRight,
	iconOnly,
	...props
}) => {
	// Estilos base
	const baseStyles =
		"inline-flex cursor-pointer items-center justify-center rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

	// Variantes de cor
	const variants = {
		primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
		secondary:
			"bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
		danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
		success: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
		warning:
			"bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500",
		ghost:
			"bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-300 border border-gray-300",
	};

	// Tamanhos
	const sizes = {
		small: "py-1.5 px-3 text-sm",
		medium: "py-2 px-4 text-base",
		large: "py-3 px-6 text-lg",
	};

	// Espaçamento para ícones
	const iconSpacing = {
		small: { left: "mr-2", right: "ml-2" },
		medium: { left: "mr-2", right: "ml-2" },
		large: { left: "mr-3", right: "ml-3" },
	};

	// Estilo quando tem apenas ícone
	const iconOnlyStyle = iconOnly
		? {
				small: "p-1.5",
				medium: "p-2",
				large: "p-2.5",
		  }[size]
		: "";

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`
        ${baseStyles}
        ${variants[variant]}
        ${iconOnly ? iconOnlyStyle : sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
			{...props}
		>
			{/* Ícone à esquerda */}
			{iconLeft && !iconOnly && (
				<span className={iconSpacing[size].left}>{iconLeft}</span>
			)}

			{/* Conteúdo/texto do botão */}
			{!iconOnly && children}

			{/* Ícone à direita */}
			{iconRight && !iconOnly && (
				<span className={iconSpacing[size].right}>{iconRight}</span>
			)}

			{/* Apenas ícone */}
			{iconOnly && iconOnly}
		</button>
	);
};

export default Button;
