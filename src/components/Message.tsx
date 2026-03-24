type MessageProps = {
	text?: React.ReactNode;
	className?: string;
	isErrorPage?: boolean;
};

const Message = ({
	text,
	className = "",
	isErrorPage = false,
}: MessageProps) => {
	const homeMessage =
		"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";

	return isErrorPage ? (
		<p className={`${className}`}>{text}</p>
	) : (
		<p
			className={`font-fa-tertiary text-lg leading-[180%] tracking-[0] text-light-blue-primary ${className}`}
		>
			{text ? text : homeMessage}
		</p>
	);
};

export default Message;
