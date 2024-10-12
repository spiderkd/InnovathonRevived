/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress.jsx";

function Controls({
  sliderData,
  data,
  transitionData,
  currentSliderData,
  handleData,
  handleTransitionData,
  handleCurrentSliderData,
  initData,
}) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSliderData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.image === data[data.length - 1].image
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSliderData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.image === data[0].image),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>
      <Progress curIndex={currentSliderData.index} length={sliderData.length} />
    </div>
  );
}

export const SliderButton = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-black transition duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      {children}
    </button>
  );
};

export default Controls;
