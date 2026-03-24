import { useState, useEffect } from "react";
import Image from "./Image";
import Navigation from "./Navigation";
import SpaceLogo from "../assets/shared/logo.svg";
import MobileNavigation from "./MobileNavigation";
import Button from "./Button";

const Header = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 850 && isActive) setIsActive(false);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isActive]);

	const handleMobileButtons = () =>
		setIsActive((changeButton) => !changeButton);

	return (
		<header className="absolute top-0 w-full min-h-24 flex justify-between items-center header">
			<Image
				srcImg={SpaceLogo}
				altImg="Space Tourism Logo - Black Star and White Circle Background"
				className="relative z-200 w-12 h-12 ml-10 mt-10 logo"
			/>

			<Navigation />
			<MobileNavigation isActive={isActive} setIsActive={setIsActive} />

			<div className="relative z-100 w-6 h-6 hidden mr-9 hamburger-menu">
				<Button
					variant="close"
					onClick={handleMobileButtons}
					className={`cursor-pointer close-btn ${isActive ? "active" : "no-active"}`}
					arialLabel="Close navigation menu."
					ariaControls="navigation-mobile-menu"
					ariaExpanded={isActive}
				/>

				<Button
					variant="hamburger"
					onClick={handleMobileButtons}
					className={`cursor-pointer hamburger-btn ${isActive ? "no-active" : "active"}`}
					arialLabel="Open navigation menu."
					ariaControls="navigation-mobile-menu"
					ariaExpanded={isActive}
				/>
			</div>
		</header>
	);
};

export default Header;
