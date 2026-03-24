import HambugerIcon from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";

type ButtonProps = {
	text?: string;
	className?: string;
	variant?: "planets" | "crew" | "tech" | "close" | "hamburger" | "default";
	arialLabel?: string;
	ariaControls?: string;
	ariaExpanded?: boolean;
	ariaPressed?: boolean;
	onClick?: () => void;
};

const Button = ({
	text = "explore",
	className = "",
	variant = "default",
	arialLabel,
	ariaControls,
	ariaExpanded,
	ariaPressed,
	onClick,
}: ButtonProps) => {
	switch (variant) {
		case "crew":
			return (
				<button
					type="button"
					className={`w-4 h-4 bg-white rounded-[50%] opacity-25 transition-opacity duration-300 cursor-pointer crew-btn ${className}`}
					aria-label={arialLabel}
					aria-pressed={ariaPressed}
					onClick={onClick}
				></button>
			);

		case "planets":
			return (
				<button
					type="button"
					className={`relative text-light-blue-primary font-fa-secondary uppercase text-lg cursor-pointer planets-btn ${className}`}
					aria-label={arialLabel}
					aria-pressed={ariaPressed}
					onClick={onClick}
				>
					{text}
				</button>
			);
		case "tech":
			return (
				<button
					type="button"
					className={`w-full max-w-20 h-20 text-white bg-transparent rounded-[50%] text-3xl cursor-pointer tech-btn ${className}`}
					onClick={onClick}
				>
					{text}
				</button>
			);

		case "close":
			return (
				<button
					className={className}
					onClick={onClick}
					aria-label={arialLabel}
					aria-controls={ariaControls}
					aria-expanded={ariaExpanded}
				>
					<img src={CloseIcon} alt="Close Icon SVG, X shape." />
				</button>
			);

		case "hamburger":
			return (
				<button
					className={className}
					onClick={onClick}
					aria-label={arialLabel}
					aria-controls={ariaControls}
					aria-expanded={ariaExpanded}
				>
					<img
						src={HambugerIcon}
						alt="Hamburger Icon SVG, three lines vertically"
					/>
				</button>
			);
		default:
			return (
				<a
					href="#destination"
					className={`relative w-full max-w-68 h-68 flex justify-center items-center justify-self-end text-[32px] text-dark-blue-primary bg-white uppercase rounded-[50%] home-btn ${className}`}
					title="Go to Destination Page."
					aria-label={arialLabel}
				>
					{text}
				</a>
			);
	}
};

export default Button;
