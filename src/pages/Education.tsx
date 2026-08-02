import React from 'react';
import ProfileImage from '../components/ProfileImage';
import coverImage from '../assets/backgrounds/education.png';
import { PiStudentBold } from 'react-icons/pi';
import { FaBookOpen, FaBrain, FaRocket } from 'react-icons/fa';
import { IoTerminal } from 'react-icons/io5';
import { VscGoToFile } from 'react-icons/vsc';
import { TbCertificate } from 'react-icons/tb';
import tcsLogo from "../assets/tcsionlogo.png";

//collage, school, certification, 

const Education: React.FC = () => {
    return (

        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl shadow-[inset_0_0_0_4px_#232846]" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">

                <div className="font-pixel-bold flex flex-col gap-2 h-full justify-center items-center">
                    <div className="flex items-center justify-center gap-2 bg-[#080e1a] p-4 text-white text-3xl rounded-2xl border-4 border-white shadow-[6px_6px_0px_#3d3d3d]">
                        <span>✨</span>
                        <PiStudentBold color='yellow' />
                        <span>EDUCATION</span>
                        <span>✨</span>
                    </div>

                    <span className="font-pixel-mono-bold text-2xl">The Journery till Now</span>
                </div>

                <div className="absolute -bottom-16 left-6">
                    <ProfileImage height="h-45" width="w-45" />
                </div>

            </div>

            {/* lower section */}
            <div className=" bg-amber-200 px-6 rounded-2xl">

                {/* flex containing two rows */}
                <div className="flex mt-6 mb-5">

                    {/* left section */}
                    <div className="flex-1/4 flex flex-col gap-4 pt-15 mr-7">

                        {/* MY LEARNING FOCUS */}
                        <fieldset className="flex flex-col bg-[#f4e8d5] p-5 pb-2 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">
                                <FaBookOpen size={30} color='white' />
                                <span>MY LEARNING FOCUS</span>
                            </legend>

                            <div className="flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-green-500 rounded-lg p-3">
                                    <FaBrain size={18} color={'golden'} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-pixel-bold">PROBLEM SOLVING AND LOGIC</span>
                                    <span className="font-pixel">Problem Solving and breaking complex logic into small steps first</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-blue-600 rounded-lg p-3">
                                    <IoTerminal size={18} color="black" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="font-pixel-bold">SOFTWARE DEVELOPMENT</span>
                                    <span className="font-pixel">Building Scalable and user-friendly solutions</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-red-500 rounded-lg p-3">
                                    <FaRocket size={18} color="white" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="font-pixel-bold">CONTINUOUS GROWTH</span>
                                    <span className="font-pixel">Learning the new technologies and improving everyday</span>
                                </div>

                            </div>

                        </fieldset>

                        {/* lets connect */}
                        {/* <fieldset className="flex flex-col bg-[#f4e8d5] pt-3 px-3 pb-4 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">

                                <FaTools size={30} color='brown' />

                                <span>TOOLS I USE</span>
                            </legend>

                            <div className="flex justify-end gap-2 h-fit">
                            </div>
                        </fieldset> */}
                    </div>

                    {/* right section */}
                    <div className="font-pixel-mono flex-3/4 flex flex-col items-stretch gap-6 border-l-4 border-gray-500 pl-7">

                        <div className="flex flex-col gap-8 relative">

                            {/* Vertical dashed connector line */}
                            <div className="absolute left-4.75 top-8 bottom-26 z-0 w-0.5 border-l-2 border-dashed border-gray-700" />

                            {/* ITEM 1 */}
                            <div className="flex items-stretch gap-4 relative z-10">

                                <div className="shrink-0 self-start">
                                    <div className="w-10 h-10 bg-red-600 border-2 border-black rounded-md flex items-center justify-center text-white font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        1
                                    </div>
                                </div>

                                <div className="flex-1 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">

                                    {/* icon */}
                                    <div className="shrink-0 flex items-center justify-center w-20 h-20 relative">
                                        <span className="text-red-600 text-3xl absolute -left-1">🌿</span>
                                        <span className="text-4xl">🎓</span>
                                        <span className="text-red-600 text-3xl absolute -right-1 scale-x-[-1]">🌿</span>
                                    </div>

                                    <div className="flex-1">

                                        <h3 className="text-red-600 font-bold text-2xl">
                                            Bachelor of Computer Applications (BCA)
                                        </h3>

                                        <p className="text-black font-semibold text-sm mt-1">
                                            Institute of Innovation in Technology and Management | Janakpuri -Delhi
                                        </p>

                                        <div className="border-t-4 border-dashed border-red-300 my-2" />

                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <span>📅 Oct 2022 – May 2025</span>
                                                <span className="text-black"> | </span>
                                                <span className="text-red-600 font-bold">
                                                    ⭐ CGPA : 7.4/10
                                                </span>
                                            </div>

                                            <a
                                                href="https://drive.google.com/file/d/1YqpUsVyNGEpRNagcLTnTKYuJndW_TdFL/view?usp=drive_link"
                                                target="_blank"
                                            >
                                                <button className="flex items-center gap-1 bg-red-600 font-bold p-1 rounded-lg text-white cursor-pointer">
                                                    <VscGoToFile size={20} color="white" />
                                                    <span >Degree</span>
                                                </button>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* ITEM 2 */}
                            <div className="flex items-stretch gap-4 relative z-10">
                                <div className="shrink-0 self-start">
                                    <div className="w-10 h-10 bg-green-700 border-2 border-black rounded-md flex items-center justify-center text-white font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        2
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-4">
                                    <div className="flex-1 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        <div className="shrink-0 flex items-center justify-center w-20 h-20 relative">
                                            <span className="text-green-700 text-3xl absolute -left-1">🌿</span>
                                            <span className="text-4xl">🏫</span>
                                            <span className="text-green-700 text-3xl absolute -right-1 scale-x-[-1]">🌿</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-green-700 font-bold text-2xl">
                                                Class XII (CBSE)
                                            </h3>
                                            <p className="text-black font-semibold text-sm mt-1">
                                                Modern Public School | Sector – 37, Faridabad
                                            </p>
                                            <div className="border-t-4 border-dashed border-green-300 my-2" />
                                            <div className="flex items-center justify-between gap-2">

                                                <div className="flex items-center gap-2">

                                                    <span>📅 Completed in:</span>
                                                    <span className="font-bold">2022</span>
                                                    <span className="text-black"> | </span>
                                                    <span className="text-red-600 font-bold">
                                                        ⭐ Percentage : 82.2%
                                                    </span>
                                                </div>

                                                <a href="https://drive.google.com/file/d/1UF4gMpjrZOt7oaPSRPAFhNuu2BCaiOnP/view?usp=drive_link" target="_blank">
                                                    <button className="flex items-center gap-1 bg-green-700 font-bold p-1 rounded-lg text-white cursor-pointer"><VscGoToFile size={20} color='white' /> <span> Marksheet</span></button>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ITEM 3 */}
                            <div className="flex items-stretch gap-4 relative z-10">
                                <div className="shrink-0 self-start">
                                    <div className="w-10 h-10 bg-blue-600 border-2 border-black rounded-md flex items-center justify-center text-white font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                        3
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-4">
                                    <div className="flex-1 bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        <div className="shrink-0 flex items-center justify-center w-20 h-20 relative">
                                            <span className="text-blue-600 text-3xl absolute -left-1">🌿</span>
                                            <span className="text-4xl">🏫</span>
                                            <span className="text-blue-600 text-3xl absolute -right-1 scale-x-[-1]">🌿</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-blue-600 font-bold text-2xl">
                                                Class X (CBSE)
                                            </h3>
                                            <p className="text-black font-semibold text-sm mt-1">
                                                Badri Narayan Public School | Sector – 91, Faridabad
                                            </p>

                                            <div className="border-t-4 border-dashed border-blue-300 my-2" />

                                            <div className="flex items-center justify-between gap-2">

                                                <div className="flex items-center gap-2">

                                                    <span>📅 Completed in:</span>
                                                    <span className="font-bold">2020</span>
                                                    <span className="text-black"> | </span>
                                                    <span className="text-red-600 font-bold">
                                                        ⭐ Percentage : 78.8%
                                                    </span>
                                                </div>

                                                <a href="https://drive.google.com/file/d/1MqBI-FXBMnXGBACVbaLGM4MF-crn_AZ-/view?usp=drive_link" target="_blank">
                                                    <button className="flex items-center gap-1 bg-blue-600 font-bold p-1 rounded-lg text-white cursor-pointer"><VscGoToFile size={20} color='white' /> <span> Marksheet</span></button>
                                                </a>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col w-full h-full p-8 bg-amber-200 rounded-lg">

                            <h1 className="font-pixel font-bold bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white shadow-[6px_6px_0px_#3d3d3d]">
                                <TbCertificate size={30} color='white' />
                                <span className="text-2xl">CERTIFICATIONS</span>
                            </h1>

                            {/* certificate items */}
                            <div className="pt-6">
                                <div className="max-w-4xl flex flex-col gap-6">

                                    {/* CARD 1 */}
                                    <div className="bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        {/* Logo box with medallion badge */}

                                        <div className="shrink-0 relative">
                                            <div className="w-20 h-20 bg-white border-2 border-red-600 rounded-lg flex flex-col items-center justify-center leading-none">
                                                <img src={tcsLogo} className="rounded-lg" alt="tcs logo" />
                                            </div>
                                            <span className="absolute -bottom-2 -right-2 text-lg">🥇</span>
                                        </div>

                                        {/* Text content */}
                                        <div className="flex-1">
                                            <h3 className="text-red-600 font-bold text-lg leading-tight">
                                                TCS iON NQT – IT
                                            </h3>
                                            <div className="border-t-4 border-dashed border-red-300 my-2" />
                                            <p className="text-sm">
                                                <span className="text-black">Overall: </span>
                                                <span className="text-red-600 font-bold">74.06%</span>
                                                <span className="text-black"> | Foundation: </span>
                                                <span className="text-red-600 font-bold">82.34%</span>
                                                <span className="text-black"> | Section: </span>
                                                <span className="text-red-600 font-bold">Java</span>
                                            </p>
                                            <p className="text-black text-sm mt-2">
                                                National Qualifier Test for IT domain conducted by TCS iON.
                                            </p>
                                        </div>

                                        {/* Right side: date + details button */}
                                        <div className="shrink-0 flex flex-col items-center gap-3">
                                            <span className="flex items-center gap-1 text-black text-sm font-bold">
                                                📅 July 2026
                                            </span>

                                            <a href="https://drive.google.com/file/d/1d0hqZzOX0qHFPFhnwTo2pfDgbXs_HLCN/view?usp=drive_link" target="_blank">
                                                <button className="border-2 border-blue-500 text-blue-600 text-sm font-bold px-3 py-1 rounded-md bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
                                                    &lt; Read Document &gt;
                                                </button>
                                            </a>

                                        </div>
                                    </div>

                                    {/* CARD 2 */}
                                    <div className="bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        {/* Logo box with medallion badge */}
                                        <div className="shrink-0 relative">
                                            <div className="w-20 h-20 bg-white border-2 border-blue-600 rounded-lg flex flex-col items-center justify-center leading-none">
                                                <img src={tcsLogo} className="rounded-lg" alt="tcs logo" />
                                            </div>
                                            <span className="absolute -bottom-2 -right-2 text-lg">🥈</span>
                                        </div>

                                        {/* Text content */}
                                        <div className="flex-1">
                                            <h3 className="text-blue-600 font-bold text-lg leading-tight">
                                                TCS iON PSYCHOMETRIC ASSESSMENT
                                            </h3>
                                            <div className="border-t-4 border-dashed border-blue-300 my-2" />
                                            <p className="text-black text-sm mt-2">
                                                Strong scores in Achievement Orientation, Leadership Motivation,
                                                Thoroughness, and Sociability.
                                            </p>
                                        </div>

                                        {/* Right side: date + details button */}
                                        <div className="shrink-0 flex flex-col items-center gap-3">
                                            <span className="flex items-center gap-1 text-black text-sm font-bold">
                                                📅 July 2026
                                            </span>

                                            <a href="https://drive.google.com/file/d/1WOXeVBVT1z_QAK48RNckig5TbRUEIlCg/view?usp=drive_link" target="_blank">
                                                <button className="border-2 border-blue-500 text-blue-600 text-sm font-bold px-3 py-1 rounded-md bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
                                                    &lt; Read Document &gt;
                                                </button>
                                            </a>
                                        </div>
                                    </div>

                                    {/* CARD 3 */}
                                    <div className="bg-orange-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex items-center gap-4">
                                        {/* Logo box with medallion badge */}
                                        <div className="shrink-0 relative">
                                            <div className="w-20 h-20 bg-white border-2 border-green-500 rounded-lg flex flex-col items-center justify-center leading-none">
                                                <span className="text-black font-bold text-xs">Internship</span>
                                                <span className="text-green-500 font-bold text-sm tracking-wide">MakeIntern</span>
                                            </div>
                                            <span className="absolute -bottom-2 -right-2 text-lg">⭐</span>
                                        </div>

                                        {/* Text content */}
                                        <div className="flex-1">
                                            <h3 className="text-green-500 font-bold text-lg leading-tight">
                                                MakeIntern - Full Stack Web Development
                                            </h3>

                                            <div className="border-t-4 border-dashed border-blue-300 my-2" />

                                            <p className="text-black text-sm mt-2">
                                                • Built and maintained basic web pages ensuring accuracy of products details and layout <br />
                                                • Assisted in troubleshooting website issues to maintain smooth daily operations
                                            </p>
                                        </div>

                                        {/* Right side: date + details button */}
                                        <div className="shrink-0 flex flex-col items-center gap-3">

                                            <span className="flex items-center gap-1 text-black text-sm font-bold">
                                                📅 29 June - 23 August 2024
                                            </span>

                                            <a href="https://drive.google.com/file/d/1cM5j8C8_RoRf5UU3wRattSQR-iKN6EBF/view?usp=drive_link" target="_blank">
                                                <button className="border-2 border-green-500 text-green-500 text-sm font-bold px-3 py-1 rounded-md bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
                                                    &lt; Read Document &gt;
                                                </button>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Education;