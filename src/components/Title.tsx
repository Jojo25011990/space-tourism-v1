type TitleProps = {
	textSpan01?: string;
	textSpan02?: string;
	classNameSpan01?: string;
	classNameSpan02?: string;
	className?: string;
	text?: string;
	isMainHeading?: boolean;
	isSecondaryHeading?: boolean;
	ariaHidden?: boolean;
};

const Title = ({
	textSpan01 = "So, you want to  travel to",
	textSpan02 = "Space",
	classNameSpan01 = "",
	classNameSpan02 = "",
	text = "",
	className = "",
	isMainHeading = false,
	isSecondaryHeading = false,
	ariaHidden,
}: TitleProps) => {
	if (isMainHeading) {
		return (
			<h1 className={className}>
				<span className={classNameSpan01}>{textSpan01}</span>
				<span className={classNameSpan02}>{textSpan02}</span>
			</h1>
		);
	} else if (isSecondaryHeading) {
		return (
			<h2 className={className}>
				<span className={classNameSpan02} aria-hidden={ariaHidden}>
					{textSpan02}
				</span>

				<span className={classNameSpan01}>{textSpan01}</span>
			</h2>
		);
	} else {
		return <h1 className={className}>{text}</h1>;
	}
};

export default Title;
