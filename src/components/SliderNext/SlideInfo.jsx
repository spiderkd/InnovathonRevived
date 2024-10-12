/* eslint-disable react/prop-types */

// import { motion } from "framer-motion";
// import { IoMdBookmark } from "react-icons/io";
import OtherInfo from "./OtherInfo";

const SlideInfo = ({ transitionData, currentSliderData }) => {
  return (
    <>
      <OtherInfo
        data={transitionData ? transitionData : currentSliderData.data}
      />
      {/* <motion.div layout className="mt-5 flex items-center gap-3">
        <button className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-sm transition duration-300 ease-in-out hover:opacity-50 ">
          <IoMdBookmark />
        </button>
      </motion.div> */}
    </>
  );
};

export default SlideInfo;
