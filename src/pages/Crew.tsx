import type { SpaceData, CrewData } from "../dataTypes";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import Title from "../components/Title";
import data from "../data.json";
import Image from "../components/Image";
import useSeo from "../seo/useSeo";
import { seoDescriptions } from "../seo/seoDescriptions";

const Crew = () => {
	const spaceData = data as SpaceData;

	const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

	const [isActiveCrewMember, setIsActiveCrewMember] = useState<number>(0);

	const activeCrewMember: CrewData = spaceData.crew[isActiveCrewMember];

	useSeo({
		title: `Crew | Space Tourism V1`,
		description: seoDescriptions.crewPage,
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
         justify-center crew-page"
		>
			<div
				className={`fixed top-0 left-0 z-2000 w-full h-full cursor-pointer overlay-lightbox ${isImageOpen ? "is-open" : "is-close"}`}
				onClick={() => setIsImageOpen(false)}
				aria-modal="true"
				role="dialog"
				aria-label={`Lightbox - ${activeCrewMember.name} Image and Text for close to lightbox.`}
			>
				{spaceData.crew.map((crewMember) => {
					return (
						<Image
							key={crewMember.id}
							srcImg={crewMember.images.png}
							altImg={crewMember.name}
							className={`planet ${crewMember.id === isActiveCrewMember ? "active" : "no-active"}`}
						/>
					);
				})}

				<Message
					text={"Click anywhere close to the lightbox"}
					className="w-full text-white tracking-[2px] text-center uppercase font-fa-tertiary overlay-message"
				/>
			</div>

			<div className="w-full max-w-277.5 flex flex-col justify-center items-center gap-6 mt-39.25 mb-0 mx-auto px-3.5 pb-12 crew-page-container">
				<Title
					isSecondaryHeading={true}
					ariaHidden={true}
					textSpan02="02"
					textSpan01="meet your crew"
					className="w-full font-fa-secondary uppercase secondary-title"
					classNameSpan02="text-[28px] font-bold tracking-[4.72px] opacity-25 mr-6"
					classNameSpan01="text-white text-[28px] font-normal tracking-[4px]"
				/>

				<div className="w-full flex justify-between items-center gap-8 crew-page-wrapper">
					{/* Content */}
					<div className="relative h-full min-h-160 flex flex-col gap-5 crew-content-box">
						<div className="w-full max-w-135 flex flex-col items-center justify-center mt-auto uppercase">
							<Title
								isMainHeading={true}
								textSpan01={activeCrewMember.role}
								textSpan02={activeCrewMember.name}
								className="uppercase self-start heading-primary"
								classNameSpan01="block opacity-50 text-[28px] tracking-[4px] heading-primary-span-01"
								classNameSpan02="block text-white text-[56px] heading-primary-span-02"
							/>

							<Message
								text={activeCrewMember.bio}
								className="text-light-blue-primary normal-case crew-description"
							/>
						</div>

						<div className="w-full max-w-45 flex items-center justify-between mt-auto">
							{spaceData.crew.map((member, index) => {
								return (
									<Button
										key={index}
										variant="crew"
										arialLabel={`Select Crew Member ${member.name}`}
										ariaPressed={
											index === isActiveCrewMember
										}
										className={
											index === isActiveCrewMember
												? "active"
												: ""
										}
										onClick={() =>
											setIsActiveCrewMember(index)
										}
									/>
								);
							})}
						</div>
					</div>
					{/* End of Content */}

					{/* Members - Images */}
					<div className="relative w-full max-w-117.5 h-full min-h-160 flex justify-center items-center crew-img-box">
						{spaceData.crew.map((crewMember) => {
							return (
								<Image
									key={crewMember.id}
									srcImg={crewMember.images.png}
									altImg={crewMember.name}
									className={`planet ${crewMember.id === isActiveCrewMember ? "active" : "no-active"}`}
									onClick={() => setIsImageOpen(true)}
									arialRole="button"
									ariaLabel={`Open lightbox for ${crewMember.name} Image`}
								/>
							);
						})}
					</div>
					{/* End of Members - Images */}
				</div>
			</div>
		</section>
	);
};

export default Crew;
