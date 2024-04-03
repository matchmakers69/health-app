import { useState, useEffect } from "react";

export const useScrollHeader = () => {
	const [isStickyHeader, setIsStickyHeader] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 82) {
			setIsStickyHeader(true);
		} else {
			setIsStickyHeader(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return isStickyHeader;
};
