const Card = ({
	children,
	className = "",
	size = "md", // 'sm' | 'md' | 'lg'
}) => {
	// Tamanhos para desktop
	const sizeClasses = {
		sm: "md:max-w-xs", // ~320px
		md: "md:max-w-md", // ~448px
		lg: "md:max-w-lg", // ~512px
	};

	return (
		<div
			className={`
      w-full
      ${sizeClasses[size]}
      bg-white dark:bg-gray-800
      rounded-xl
      border border-gray-100 dark:border-gray-700
      shadow-sm hover:shadow-md
      transition-all duration-200
      p-4
      ${className}
    `}
		>
			{children}
		</div>
	);
};

export default Card;
