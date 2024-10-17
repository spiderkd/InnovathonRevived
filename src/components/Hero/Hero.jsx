// import robot from "../../public/Vector.png";
import robot from "../../../public/Component_1.png";
import Logo from "../../../Public/image.png";
import Image from "next/image";
import "./Hero.css";
import EncryptButton from "../EncryptButton/EncryptButton.jsx";

const Hero = () => {
	return (
		<div className="pl-1 pr-3 pt-3 relative bg-[#151a20] h-screen">
			<div className="h-[5.3rem] w-[16rem] ml-5 py-2 absolute">
				<Image src={Logo} className="" />
			</div>
			<div className="bg-[#0D1117] z-10 Main flex relative justify-center h-screen w-full">
				<h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl Heading tracking-widest absolute mx-auto top-[15%] text-[#D1E8FF] z-10 font-Neuropol">
					INNOVATHON
				</h1>

				<Image
					src={robot}
					className="w-[34%] md:w-[38%] sm:w-[42%] 2xl:w-[30%] self-end mx-auto justify-self-center Robot absolute z-30"
				/>
				<div className="flex w-[75%] text-center lg:text-left lg:w-[28%] xl:w-[25%] xl:top-[32%] 2xl:top-[35%] lg:top-[32%] sm:top-[25%] text-[1.1rem] self-center left-[11%] absolute">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
					aperiam ipsum laboriosam culpa illo voluptates fuga quidem atque.
					Suscipit, architecto reiciendis nam similique voluptatibus
					reprehenderit aspernatur veniam in corrupti illum!
					<div className="absolute lg:-bottom-[46%] -bottom-[70%] md:left-0 left-1/3  z-30">
						<EncryptButton
							targetText="Register here"
							cyclesPerLetter={2}
							shuffleTime={40}
							chars="!@#$%^&*():{};|,.<>/?"
							className=""
						/>
					</div>
				</div>

				<svg className="svg">
					<clipPath id="clip" clipPathUnits="objectBoundingBox">
						<path d="M0.17,0.69 H0.067 H0.032 C0.01,0.687,0.004,0.676,0.003,0.646 V0.148 C0.008,0.123,0.014,0.113,0.032,0.107 H0.142 C0.166,0.107,0.179,0.08,0.181,0.061 C0.182,0.041,0.185,0.004,0.205,0.004 H0.972 C0.992,0.004,1,0.05,1,0.066 V0.616 C0.996,0.657,0.988,0.661,0.965,0.664 H0.695 C0.676,0.671,0.669,0.681,0.668,0.712 V0.908 C0.663,0.943,0.656,0.955,0.633,0.96 L0.357,0.96  C0.346,0.96,0.337,0.925,0.337,0.925  L0.299,0.801 C0.293,0.769,0.285,0.762,0.267,0.76 H0.213 C0.183,0.76,0.206,0.69,0.17,0.69"></path>
					</clipPath>
				</svg>
			</div>
			<div className="absolute lg:bottom-8 bottom-12 lg:left-10 left-3 max-w-screen z-40">
				<div className="tracking-widest lg:text-lg">
					<ul className="space-y-2 text-gray-400">
						<li className="flex items-center space-x-4">
							<span className="bg-gray-500 p-1 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-4 w-4 text-black">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.5l5.5 5.5-5.5 5.5M6.5 10h9"
									/>
								</svg>
							</span>
							<span>AI Integration</span>
						</li>
						<li className="flex items-center space-x-4">
							<span className="bg-gray-500 p-1 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-4 w-4 text-black">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.5l5.5 5.5-5.5 5.5M6.5 10h9"
									/>
								</svg>
							</span>
							<span>Autonomous Navigation</span>
						</li>
						<li className="flex items-center space-x-4">
							<span className="bg-gray-500 p-1 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-4 w-4 text-black">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.5l5.5 5.5-5.5 5.5M6.5 10h9"
									/>
								</svg>
							</span>
							<span>Precision Engineering</span>
						</li>
						<li className="flex items-center space-x-4">
							<span className="bg-gray-500 p-1 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-4 w-4 text-black">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.5l5.5 5.5-5.5 5.5M6.5 10h9"
									/>
								</svg>
							</span>
							<span>Voice and Facial Recognition</span>
						</li>
						<li className="flex items-center space-x-4">
							<span className="bg-gray-500 p-1 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-4 w-4 text-black">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.5l5.5 5.5-5.5 5.5M6.5 10h9"
									/>
								</svg>
							</span>
							<span>Human-Robot Interaction</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="absolute  text-right lg:bottom-8 bottom-12 right-10 z-40 xl:text-3xl lg:text-2xl text-xl text-[#d1e8ff8a] tracking-wider font-semibold  w-[35%]">
				<div>
					<h2 className="font-sans">
						Production and Industrial
						<br />
						Engineering Society
					</h2>
					<p className="">
						<span className="text-center text-[#D1E8FF] font-Neuropol tracking-widest">
							{" "}
							in collaboration with{" "}
						</span>
						<br />
						<span className="font-sans">
							Institution Innovation Center <br />
							Council, BIT Sindri
						</span>
					</p>
				</div>
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
