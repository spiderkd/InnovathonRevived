"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackGroundImage from "./BackGroundImage.jsx";
import SlideInfo from "./SlideInfo.jsx";
import Slides from "./Slides.jsx";
import Controls from "./controls.jsx";
// import img1 from "/images/1.png";

const Slider = () => {
	const [data, setData] = React.useState(sliderData.slice(1));
	const [transitionData, setTransitionData] = React.useState(sliderData[0]);
	const [currentSliderData, setCurrentSliderData] = useState({
		data: initData,
		index: 0,
	});

	return (
		<main className="relative  min-h-screen select-none overflow-hidden text-white antialiased">
			<AnimatePresence>
				<BackGroundImage
					transitionData={transitionData}
					currentSliderData={currentSliderData}
				/>
				<div className="absolute z-20 h-full w-full ">
					<hr />
					<div className="flex h-full w-full grid-cols-11 flex-col md:grid">
						<div
							className="col-span-6 mb-3 flex h-full flex-1 flex-col justify-end  px-5 md:mb-0 md:justify-center m
            1d:px-10 ">
							<SlideInfo
								currentSliderData={currentSliderData}
								transitionData={transitionData}
							/>
						</div>
						<div className="col-span-5 flex h-full flex-1 flex-col justify-end items-end p-4 md:justify-end ">
							<Slides data={data} />
							<Controls
								data={data}
								currentSliderData={currentSliderData}
								transitionData={transitionData}
								initData={initData}
								handleData={setData}
								handleTransitionData={setTransitionData}
								handleCurrentSliderData={setCurrentSliderData}
								sliderData={sliderData}
							/>
						</div>
					</div>
				</div>
			</AnimatePresence>
		</main>
	);
};

const sliderData = [
	{
		Number: "Problem 01",
		image: "/images/1.png",

		description:
			"Develop an AI/ML-based framework for detecting and classifying surface defects in a manufactured component. Manufacturing processes such as casting, forming, machining, welding, etc. can be considered. The dataset of surface defects can be collected from any source on the internet. The minimum number of datasets and model stability must be justified. Evaluate model performance using appropriate metrics (e.g., accuracy, precision, recall, etc.).",
		title: "Quality control in manufacturing using AI/ML",
	},
	{
		Number: "Problem 02",
		image: "/images/2.png",

		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui. Ut lectus purus, commodo et egestas id, cursus ac velit. Nulla facilisi. Pellentesque lobortis quam id dolor ullamcorper convallis.",
		title: "Lorem Ipsum 2",
	},
	{
		Number: "Problem 03",
		image: "/images/3.png",

		description:
			"Phasellus dignissim, metus ut convallis lobortis, sapien metus ornare justo, vitae accumsan elit erat ut odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut nec sapien dignissim, interdum quam sit amet, dictum risus. Quisque non dui ut libero bibendum faucibus sit amet sit amet felis. Nulla lacinia, metus et feugiat scelerisque, ante nisi volutpat odio, sed commodo arcu nunc sed sapien. Aenean facilisis lorem at sapien pretium vehicula.",
		title: "Lorem Ipsum 3",
	},
	{
		Number: "Problem 04",
		image: "/images/4.png",

		description:
			"Suspendisse potenti. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Etiam eu velit dui, a ultricies velit. Maecenas pulvinar sem nec odio mollis consequat. Sed vulputate diam quis justo posuere volutpat. Praesent quis venenatis massa. Donec vel arcu nec magna aliquam sagittis.",
		title: "Lorem Ipsum 4",
	},
	{
		Number: "Problem 05",
		image: "/images/5.png",

		description:
			"Curabitur pellentesque, massa nec venenatis facilisis, nunc erat ullamcorper turpis, eget dapibus lacus quam non nisi. Vivamus a purus non nulla commodo viverra sit amet ut leo. Sed elementum magna a est lobortis dictum. Phasellus fermentum, orci eget laoreet facilisis, tortor risus suscipit massa, sed malesuada velit arcu nec nulla. Proin sed purus in turpis tincidunt malesuada. Nam tincidunt mauris sit amet eros aliquet placerat. Pellentesque habitant morbi tristique senectus et netus.",
		title: "Lorem Ipsum 5",
	},
	{
		Number: "Problem 06",
		image: "/images/6.png",

		description:
			"Donec ac odio tempor orci dapibus ultricies. Integer vitae justo eget magna fermentum iaculis. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nulla malesuada pellentesque elit eget gravida cum sociis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare.",
		title: "Lorem Ipsum 6",
	},
];

const initData = sliderData[0];

export default Slider;
