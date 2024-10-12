// import robot from "../../public/Vector.png";
import robot from "../../../public/Component_1.png";
import Logo from "../../../Public/image.png";
import Image from "next/image";
import "./Hero.css";
import EncryptButton from "../EncryptButton/EncryptButton.jsx";

const Hero = () => {
  return (
    <div className=" pl-1 pr-3 pt-3 relative bg-[#151a20]  h-screen">
      <div className=" h-[5.3rem] w-[16rem] ml-5 py-2 absolute  ">
        <Image src={Logo} className=" " />
      </div>
      <div className="bg-[#0D1117] z-10 Main flex relative justify-center h-screen w-full  ">
        <h1 className="text-9xl Heading tracking-widest absolute mx-auto top-[15%] text-[#D1E8FF] z-10 font-Neuropol ">
          INNOVATHONNNN
        </h1>

        <Image
          src={robot}
          className=" w-[34%] self-end mx-auto justify-self-center Robot absolute z-30  "
        />
        <div className="flex w-[27%] top-[35%] text-[1.1rem] self-center left-[11%] absolute">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aperiam
          ipsum laboriosam culpa illo voluptates fuga quidem atque. Suscipit,
          architecto reiciendis nam similique voluptatibus reprehenderit
          aspernatur veniam in corrupti illum!
          <div className="absolute -bottom-[60%] ">
            <EncryptButton
              targetText="Register here"
              cyclesPerLetter={2}
              shuffleTime={40}
              chars="!@#$%^&*():{};|,.<>/?"
            />
          </div>
        </div>
        <svg className="svg">
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path d="M0.17,0.69 H0.067 H0.032 C0.01,0.687,0.004,0.676,0.003,0.646 V0.148 C0.008,0.123,0.014,0.113,0.032,0.107 H0.142 C0.166,0.107,0.179,0.08,0.181,0.061 C0.182,0.041,0.185,0.004,0.205,0.004 H0.972 C0.992,0.004,1,0.05,1,0.066 V0.616 C0.996,0.657,0.988,0.661,0.965,0.664 H0.695 C0.676,0.671,0.669,0.681,0.668,0.712 V0.908 C0.663,0.943,0.656,0.955,0.633,0.96 L0.357,0.96  C0.346,0.96,0.337,0.925,0.337,0.925  L0.299,0.801 C0.293,0.769,0.285,0.762,0.267,0.76 H0.213 C0.183,0.76,0.206,0.69,0.17,0.69"></path>
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

//rounded-tr-[70px]  border-[#151a20] border-solid

{
  /* <svg className="svg">
        <clipPath id="clip" clipPathUnits="objectBoundingBox">
          <path d="M0.188,0.048 C0.186,0.061,0.188,0.035,0.183,0.074 C0.178,0.112,0.159,0.122,0.139,0.122 H0.048 C0.027,0.123,0.002,0.123,0.001,0.166 V0.585 V0.648 C0.002,0.664,0.005,0.67,0.013,0.672 H0.21 C0.219,0.674,0.222,0.677,0.228,0.688 L0.359,0.988 C0.364,0.997,0.368,1,0.376,1 H0.632 C0.645,0.998,0.649,0.99,0.651,0.966 V0.722 C0.652,0.689,0.657,0.677,0.678,0.672 H0.978 C0.996,0.669,1,0.66,1,0.632 C1,0.399,1,0.133,1,0.079 C1,-0.02,0.94,0.005,0.934,0.003 H0.209 C0.206,0.003,0.189,0.034,0.188,0.048"></path>
        </clipPath>
      </svg> */
}

{
  /* <div className="absolute  bg-[#151a20] h-screen w-full -z-[60] flex top-0 right-0 " /> */
}
