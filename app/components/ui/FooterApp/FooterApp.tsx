export function FooterApp() {
	return (
		<footer className="bg-light-green relative mt-auto w-full py-10 pt-[100px] text-navy md:pt-[120px]">
			<div className="container mx-auto">
				<div className="mx-auto p-4">
					<p className="caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights reserved.</p>
				</div>
			</div>

			<div className="wave-footer-app">
				<svg
					data-name="footer-app-wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</footer>
	);
}
