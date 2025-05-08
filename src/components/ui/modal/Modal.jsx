const Modal = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70  p-8">
			<div className="bg-white rounded p-6 max-w-md w-full shadow-lg relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
				>
					&times;
				</button>
				{title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
