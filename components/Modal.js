import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-md shadow-md w-full lg:w-2/3">
				<button
					className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
					onClick={onClose}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
