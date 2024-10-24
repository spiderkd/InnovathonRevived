/* eslint-disable react/prop-types */
import SliderCard from "./SliderCard";

const Slides = ({ data }) => {
	return (
		<div className="flex w-full gap-6 ">
			{data.map((data) => {
				return <SliderCard key={data.image} data={data} />;
			})}
		</div>
	);
};

export default Slides;
