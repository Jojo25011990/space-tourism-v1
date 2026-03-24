import type { SpaceData, TechnologyData } from "../dataTypes";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import Message from "../components/Message";
import Title from "../components/Title";
import data from "../data.json";
import useSeo from "../seo/useSeo";
import { seoDescriptions } from "../seo/seoDescriptions";

const Technology = () => {
	const spaceData = data as SpaceData;

	useSeo({
		title: `Technology | Space Tourism V1`,
		description: seoDescriptions.technologyPage,
	});

	//  *** Version 01 ***
	// const [isLargeDesktop, setIsLargeDesktop] = useState<boolean>(
	// 	() => window.innerWidth > 1100,
	// );
	//  *** End of Version 01 ***

	// *** Version 02 ***
	const [isLargeDesktop, setIsLargeDesktop] = useState<boolean>(
		window.innerWidth > 1100,
	);
	// *** End of Version 02 ***

	useEffect(() => {
		const handleResize = () => setIsLargeDesktop(window.innerWidth > 1100);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

	const [isActiveTechnology, setIsActiveTechnology] = useState<number>(0);

	const activeTechnology: TechnologyData =
		spaceData.technology[isActiveTechnology];

	useEffect(() => {
		const handleLightboxResize = () => {
			if (isImageOpen && window.innerWidth > 850) setIsImageOpen(false);
		};

		window.addEventListener("resize", handleLightboxResize);
		return () => window.removeEventListener("resize", handleLightboxResize);
	}, [isImageOpen]);

	return (
		<section className="w-full min-h-screen flex justify-center items-center technology-page">
			<div
				className={`fixed top-0 left-0 z-2000 w-full h-full cursor-pointer overlay-lightbox ${isImageOpen ? "is-open" : "is-close"}`}
				onClick={() => setIsImageOpen(false)}
				role="dialog"
				aria-label={`Lightbox - ${activeTechnology.name} Image and Text for close to lightbox.`}
			>
				{spaceData.technology.map((technology, index) => {
					return (
						<Image
							key={index}
							srcImg={technology.images.portrait}
							altImg={technology.name}
							className={`planet ${index === isActiveTechnology ? "active" : "no-active"}`}
						/>
					);
				})}

				<Message
					text={"Click anywhere close to the lightbox"}
					className={`w-full text-white tracking-[2px] text-center uppercase font-fa-tertiary overlay-message`}
				/>
			</div>

			<div className="w-full max-w-318.75 flex flex-col justify-center gap-6 mt-39.25 mb-0 mx-auto px-3.5 pb-12 technology-page-container">
				<Title
					isSecondaryHeading={true}
					ariaHidden={true}
					textSpan02="03"
					textSpan01="space launch 101"
					className="w-full font-fa-secondary uppercase secondary-title"
					classNameSpan02="text-[28px] font-bold tracking-[4.72px] opacity-25 mr-6"
					classNameSpan01="text-white text-[28px] font-normal tracking-[4px]"
				/>

				<div className="w-full flex justify-between items-center technology-page-wrapper">
					{/* content box */}
					<div className="w-full max-w-158.75 min-h-85 flex justify-between items-center gap-16 py-5 technology-content-box">
						{/* button box */}
						<div className="w-full max-w-20 h-full flex flex-col justify-between items-center gap-7 technology-button-box">
							{spaceData.technology.map(
								(technologyNumber, index) => {
									return (
										<Button
											key={index}
											text={technologyNumber.number}
											variant="tech"
											arialLabel={`Select Technology ${technologyNumber.name}`}
											ariaPressed={
												index === isActiveTechnology
											}
											className={
												index === isActiveTechnology
													? "active"
													: ""
											}
											onClick={() =>
												setIsActiveTechnology(index)
											}
										/>
									);
								},
							)}
						</div>
						{/* description box */}
						<div>
							<Title
								isMainHeading={true}
								textSpan01="the terminology..."
								textSpan02={activeTechnology.name}
								className="uppercase self-start heading-primary"
								classNameSpan01="block opacity-50 text-[28px] tracking-[4px] heading-primary-span-01"
								classNameSpan02="block text-white text-[56px] heading-primary-span-02"
							/>
							<Message
								text={activeTechnology.description}
								className="description-primary technology-description mt-5 technology-message"
							/>
						</div>
					</div>
					{/* Image box */}
					<div className="relative w-full max-w-128.75 min-h-160 flex justify-center technology-img-box">
						{spaceData.technology.map((technology, index) => {
							return (
								<Image
									key={index}
									srcImg={
										isLargeDesktop
											? technology.images.portrait
											: technology.images.landscape
									}
									altImg={technology.name}
									className={`planet ${index === isActiveTechnology ? "active" : "no-active"}`}
									onClick={() => setIsImageOpen(true)}
									arialRole="button"
									ariaLabel={`Open lightbox for ${technology.name} Image`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technology;
