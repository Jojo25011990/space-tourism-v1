import Button from "../components/Button";
import Message from "../components/Message";
import Title from "../components/Title";
import { seoDescriptions } from "../seo/seoDescriptions";
import useSeo from "../seo/useSeo";

const Home = () => {
	useSeo({
		title: `Home | Space Tourism V1`,
		description: seoDescriptions.homePage,
	});

	return (
		<section
			className="w-full min-h-screen flex items-center
         justify-center home-page"
		>
			<div className="w-full max-w-277.5 flex justify-center items-center mt-62.25 mb-0 mx-auto px-3.5 home-page-container">
				<div className="w-full max-w-135 text-light-blue-primary">
					<Title
						isMainHeading={true}
						className="uppercase self-start home-title"
						classNameSpan01="block text-[28px] tracking-[4px] home-title-span-01"
						classNameSpan02="block text-white text-[144px] tracking-0 home-title-span-02"
					/>
					<Message className="home-message-animation home-description description-primary" />
				</div>
				<div className="w-full max-w-135">
					<Button arialLabel="Go to Destination Page." />
				</div>
			</div>
		</section>
	);
};

export default Home;
