export const FooterAuth = () => {
	return (
		<footer className="bg-foreground-lighter-violet relative mt-auto w-full py-10 pt-[130px] text-navy md:pt-[150px]">
			<div className="container mx-auto">
				<div className="mx-auto p-4">
					<p className="caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights reserved.</p>
				</div>
			</div>

			<div className="wave-footer-auth">
				<svg
					data-name="footer-auth-wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</footer>
	);
};
