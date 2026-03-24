import type { SpaceData, DestinationData } from "../dataTypes";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import data from "../data.json";
import Message from "../components/Message";
import Image from "../components/Image";
import useSeo from "../seo/useSeo";
import { seoDescriptions } from "../seo/seoDescriptions";

const Destination = () => {
	const spaceData = data as SpaceData;

	const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

	const [isActiveDestinations, setIsActiveDestinations] = useState<number>(0);

	const activeDestinations: DestinationData =
		spaceData.destinations[isActiveDestinations];

	useSeo({
		title: `Destination | Space Tourism V1`,
		description: seoDescriptions.destinationPage,
	});

	useEffect(() => {
		const handleLightboxResize = () => {
			if (isImageOpen && window.innerWidth > 850) setIsImageOpen(false);
		};

		window.addEventListener("resize", handleLightboxResize);
		return () => window.removeEventListener("resize", handleLightboxResize);
	}, [isImageOpen]);

	return (
		<section
			className="w-full min-h-screen flex items-center
         justify-center destination-page"
		>
			<div
				className={`fixed top-0 left-0 z-2000 w-full h-full cursor-pointer overlay-lightbox ${isImageOpen ? "is-open" : "is-close"}`}
				onClick={() => setIsImageOpen(false)}
				aria-modal="true"
				role="dialog"
				aria-label={`Lightbox - ${activeDestinations.name} Image and Text for close to lightbox.`}
			>
				{spaceData.destinations.map((planet) => {
					return (
						<Image
							key={planet.id}
							srcImg={planet.images.png}
							altImg={planet.name}
							className={`planet ${planet.id === isActiveDestinations ? "active" : "no-active"}`}
						/>
					);
				})}

				<Message
					text={"Click anywhere close to the lightbox"}
					className="w-full text-white tracking-[2px] text-center uppercase font-fa-tertiary overlay-message"
				/>
			</div>

			<div className="w-full max-w-277.5 flex flex-col justify-center items-center gap-6 mt-39.25 mb-0 mx-auto px-3.5 pb-12 destination-page-container">
				<Title
					isSecondaryHeading={true}
					ariaHidden={true}
					textSpan02="01"
					textSpan01="pick your destination"
					className="w-full font-fa-secondary uppercase secondary-title"
					classNameSpan02="text-[28px] font-bold tracking-[4.72px] opacity-25 mr-6"
					classNameSpan01="text-white text-[28px] font-normal tracking-[4px]"
				/>

				<div className="w-full flex justify-between gap-13 destination-page-wrapper">
					{/* Planets */}
					<div className="relative w-full max-w-132.5 min-h-160 flex flex-col justify-center items-center destination-img-box">
						{spaceData.destinations.map((planet) => {
							return (
								<Image
									key={planet.id}
									srcImg={planet.images.png}
									altImg={planet.name}
									className={`planet ${planet.id === isActiveDestinations ? "active" : "no-active"}`}
									onClick={() => setIsImageOpen(true)}
									arialRole="button"
									ariaLabel={`Open lightbox for ${planet.name} Image`}
								/>
							);
						})}
					</div>
					{/* End of Planets */}

					{/* Content */}
					<div className="w-full max-w-132.5 min-h-160 flex flex-col justify-center items-center gap-10 px-10 destination-content-box">
						<div className="w-full flex gap-8 destination-button-box">
							{spaceData.destinations.map((planet) => {
								return (
									<Button
										key={planet.id}
										variant="planets"
										text={planet.name}
										arialLabel={`Select Planet ${planet.name}`}
										ariaPressed={
											planet.id === isActiveDestinations
										}
										className={
											planet.id === isActiveDestinations
												? "active"
												: ""
										}
										onClick={() =>
											setIsActiveDestinations(planet.id)
										}
									/>
								);
							})}
						</div>

						<Title
							text={activeDestinations.name}
							className="text-8xl uppercase self-start destination-title"
						/>

						<Message
							text={activeDestinations.description}
							className="destination-description"
						/>

						<hr className="w-full opacity-30 destination-line" />

						<aside className="w-full flex gap-12 destination-aside-box">
							<Title
								isSecondaryHeading={true}
								textSpan02="avg. distance"
								textSpan01={activeDestinations.distance}
								className="w-full font-fa-secondary uppercase destination-secondary-title"
								classNameSpan02="block text-sm font-bold tracking-[4.72px] text-light-blue-primary opacity-50 mb-1"
								classNameSpan01="block font-fa-primary  text-[28px] font-normal tracking-[4px] mb-1"
							/>
							<Title
								isSecondaryHeading={true}
								textSpan02="est. travel time"
								textSpan01={activeDestinations.travel}
								className="w-full font-fa-secondary uppercase destination-secondary-title"
								classNameSpan02="block text-sm font-bold tracking-[4.72px] text-light-blue-primary opacity-50 mb-1"
								classNameSpan01="block font-fa-primary  text-[28px] font-normal tracking-[4px] mb-1"
							/>
						</aside>
					</div>
					{/* End of Content */}
				</div>
			</div>
		</section>
	);
};

export default Destination;
