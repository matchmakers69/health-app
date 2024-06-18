"use client";

import { type ModalProps } from "./defs";

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
				<div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
					<div
						className={`translate h-full duration-300 
            ${isOpen ? "translate-y-0" : "translate-y-full"} 
            ${isOpen ? "opacity-100" : "opacity-0"}`}
					>
						<div className="translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
							<header className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
								<button
									onClick={onClose}
									className="text-dark-blue absolute right-9 border-0 p-1 transition hover:opacity-70"
									type="button"
								>
									<i className="ri-close-large-fill text-[2.5rem]"></i>
								</button>

								<p className="text-dark-blue text-lg font-semibold">{title}</p>
							</header>
							<div className="relative flex-auto p-6">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
