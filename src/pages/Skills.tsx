import React from 'react';
import ProfileImage from '../components/ProfileImage';
import Socials from '../components/Socials';
import coverImage from "../assets/backgrounds/background.png";
import HeadingBox from '../components/HeadingBox';
import { FaClock, FaComments, FaCss3Alt, FaGithub, FaHtml5, FaJava, FaJs, FaStar, FaSyncAlt, FaUsers } from 'react-icons/fa';
import { SiDocker, SiFigma, SiIntellijidea, SiLinux, SiPostman, SiSpringboot, SiThunderbird } from 'react-icons/si';
import { IoBulbSharp } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { VscVscode } from 'react-icons/vsc';


const Skills: React.FC = () => {
    return (
        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl shadow-[inset_0_0_0_4px_#232846]" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">
                <div className="absolute -bottom-16 left-6">
                    <ProfileImage height="h-45" width="w-45" />
                </div>

            </div>

            {/* //lower profile detailes */}
            <div className="bg-amber-200 pl-6 border border-b-blue-800 rounded-2xl">

                <Socials />

                <div className="h-fit p-2 font-vga">

                    {/* <!-- Top --> */}
                    <div className="flex gap-4">

                        {/* <!-- Title --> */}
                        <div className="flex-2 flex flex-col gap-4">

                            <div className="font-pixel-bold flex items-center justify-center text-3xl border-6 border-black w-fit rounded-md shadow-[6px_6px_0px_#3d3d3d]">

                                <span className="bg-black p-3">
                                    ⭐
                                </span>

                                <span className="flex-1 bg-red-500 text-yellow-200 p-3">
                                    SKILLS
                                </span>

                            </div>

                            <span className="text-2xl">Tools and technologies i Use</span>
                        </div>


                        {/* <!-- Terminal --> */}
                        <div className="w-[30vw] bg-[#101321] border-4 border-black rounded-lg p-2 text-green-400 h-fit shadow-[6px_6px_0px_#3d3d3d]">

                            <span>
                                &gt; I'm actively looking for job opportunities so you can just ping me:
                                <br />
                                &gt; <a href="https://wa.me/919310749050" target="_blank">

                                    <button className="mt-2 text-green-400 border border-green-400 p-1 rounded-md cursor-pointer transition duration-300 hover:bg-green-400 hover:text-[#101321]" >
                                        SEND MESSAGE
                                    </button>
                                </a>
                            </span>

                        </div>

                        {/* <!-- Stats --> */}
                        <div className="w-[30vw] flex border-4 border-black bg-[#f6e5b5] rounded-xl py-2 shadow-[6px_6px_0px_#3d3d3d] mr-4">

                            <div className="flex-1 p-2 flex flex-col justify-center items-center border-r-4 border-dotted border-red-400">
                                <div className="text-4xl">💻</div>
                                <div className="text-3xl">10+</div>
                                <div>Technologies</div>
                            </div>

                            <div className="flex-1 p-2 flex flex-col justify-center items-center border-r-4 border-dotted border-red-400">
                                <div className="text-4xl">🖥</div>
                                <div className="text-3xl">3+</div>
                                <div>Years</div>
                            </div>

                            <div className="flex-1 p-2 flex flex-col justify-center items-center border-r-4 border-dotted border-red-400">
                                <div className="text-4xl">📦</div>
                                <div className="text-3xl">15+</div>
                                <div>Projects</div>
                            </div>

                            <div className="flex-1 p-2 flex flex-col justify-center items-center">
                                <div className="text-4xl">⭐</div>
                                <div className="text-3xl">100%</div>
                                <div>Passion</div>
                            </div>

                        </div>

                    </div>

                    {/* <!-- skills --> */}
                    <div className="mt-4 p-5 mr-4">

                        <HeadingBox text={'TOOLS & PLATFORMS'} icon={<IoMdSettings color="gray" />} textSize={"text-2xl"} containerBgColor={"bg-[#22273c]"} padding={'p-1'} textColor={'text-white'} />

                        <div className="flex justify-between mt-5">

                            {/* VS Code */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <VscVscode color="#27a2e7" size={30} />
                                <span>VS Code</span>
                            </div>

                            {/* IntelliJ IDEA */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <SiIntellijidea color="#000000" size={30} />
                                <span>IntelliJ IDEA</span>
                            </div>

                            {/* Postman */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <SiPostman color="#FF6C37" size={30} />
                                <span>Postman</span>
                            </div>

                            {/* Figma */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <SiFigma color="#F24E1E" size={30} />
                                <span>Figma</span>
                            </div>

                            {/* Docker */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <SiDocker color="#2496ED" size={30} />
                                <span>Docker</span>
                            </div>

                            {/* Thunder Client */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <SiThunderbird color="#0A84FF" size={30} />
                                <span>Thunder Client</span>
                            </div>

                            {/* Linux */}
                            <div className="border-2 border-black bg-white px-6 py-2 h-fit flex gap-2 text-lg items-center justify-center rounded-lg shadow-[6px_6px_0px_#3d3d3d]">
                                <SiLinux color="black" size={30} />
                                <span>Linux</span>
                            </div>

                        </div>

                    </div>


                    {/* <!-- Middle --> */}
                    <div className="mt-4 flex gap-4 mb-4 ">

                        {/* <!-- Technical --> */}
                        <div className="flex-1 border-4 border-black bg-[#f6e5b5] rounded-lg p-4 h-fit shadow-[6px_6px_0px_#3d3d3d]">

                            <HeadingBox text={'TECHNICAL SKILLS'} icon={'💻'} textSize={"text-2xl"} containerBgColor={"bg-[#22273c]"} padding={'p-1'} textColor={'text-white'} />

                            <div className="flex flex-col gap-4 mt-6">

                                {/* <!-- Left --> */}


                                {/* HTML */}
                                <div className="flex items-center gap-2">
                                    <div className="w-fit">
                                        <FaHtml5 color="orange" size={50} />
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-between mb-2">
                                            <span>HTML</span>
                                            <span>95%</span>
                                        </div>

                                        <div className="rounded-full h-4 border-2 border-[#b57f30]">
                                            <div className="bg-[#e53c5d] h-full w-[95%]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* CSS */}
                                <div className="flex items-center gap-2">
                                    <div className="w-fit">
                                        <FaCss3Alt color="#1572B6" size={50} />
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-between mb-2">
                                            <span>CSS</span>
                                            <span>90%</span>
                                        </div>

                                        <div className="rounded-full h-4 border-2 border-[#b57f30]">
                                            <div className="bg-[#e53c5d] h-full w-[90%]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* JavaScript */}
                                <div className="flex items-center gap-2">
                                    <div className="w-fit">
                                        <FaJs color="#F7DF1E" size={50} />
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-between mb-2">
                                            <span>JavaScript</span>
                                            <span>80%</span>
                                        </div>

                                        <div className="rounded-full h-4 border-2 border-[#b57f30]">
                                            <div className="bg-[#e53c5d] h-full w-[80%]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Java */}
                                <div className="flex items-center gap-2">
                                    <div className="w-fit">
                                        <FaJava color="#007396" size={50} />
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-between mb-2">
                                            <span>Java</span>
                                            <span>80%</span>
                                        </div>

                                        <div className="rounded-full h-4 border-2 border-[#b57f30]">
                                            <div className="bg-[#e53c5d] h-full w-[80%]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Spring Boot */}
                                <div className="flex items-center gap-2">
                                    <div className="w-fit">
                                        <SiSpringboot color="#6DB33F" size={50} />
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-between mb-2">
                                            <span>Spring Boot</span>
                                            <span>75%</span>
                                        </div>

                                        <div className="rounded-full h-4 border-2 border-[#b57f30]">
                                            <div className="bg-[#e53c5d] h-full w-[75%]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Git & GitHub */}
                                <div className="flex items-center gap-2">
                                    <div className="w-fit flex">
                                        <FaGithub color="#181717" size={42} />
                                    </div>

                                    <div className="w-full">

                                        <div className="flex justify-between mb-2">
                                            <span>Git & GitHub</span>
                                            <span>85%</span>
                                        </div>

                                        <div className="rounded-full h-4 border-2 border-[#b57f30]">
                                            <div className="bg-[#e53c5d] h-full w-[85%]"></div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* <!-- Soft Skills --> */}
                        <div className="flex-1 flex flex-col gap-4  border-4 border-black bg-[#f6e5b5] rounded-lg p-5 shadow-[6px_6px_0px_#3d3d3d] mr-4">

                            <HeadingBox text={'SOFT SKILLS'} icon={'😎'} textSize={"text-2xl"} containerBgColor={"bg-[#22273c]"} padding={'p-1'} textColor={'text-white'} />

                            <div className="mt-6 space-y-5">

                                <div className="flex justify-between border-b border-dotted border-red-400 pb-2">
                                    <div className="flex gap-4 items-center justify-center">
                                        <IoBulbSharp color="yellow" size={40} />
                                        <div className="text-2xl">Problem Solving</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="black" size={30} />
                                    </div>
                                </div>

                                {/* Communication */}
                                <div className="flex justify-between border-b border-dotted border-red-400 pb-2">
                                    <div className="flex gap-4 items-center justify-center">
                                        <FaComments color="#3b82f6" size={40} />
                                        <div className="text-2xl">Communication</div>
                                    </div>

                                    <div className="flex gap-1">
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="black" size={30} />
                                    </div>
                                </div>

                                {/* Teamwork */}
                                <div className="flex justify-between border-b border-dotted border-red-400 pb-2">
                                    <div className="flex gap-4 items-center justify-center">
                                        <FaUsers color="#10b981" size={40} />
                                        <div className="text-2xl">Teamwork</div>
                                    </div>

                                    <div className="flex gap-1">
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="black" size={30} />
                                    </div>
                                </div>

                                {/* Time Management */}
                                <div className="flex justify-between border-b border-dotted border-red-400 pb-2">
                                    <div className="flex gap-4 items-center justify-center">
                                        <FaClock color="#f59e0b" size={40} />
                                        <div className="text-2xl">Time Management</div>
                                    </div>

                                    <div className="flex gap-1">
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="black" size={30} />
                                    </div>
                                </div>

                                {/* Adaptability */}
                                <div className="flex justify-between border-b border-dotted border-red-400 pb-2">
                                    <div className="flex gap-4 items-center justify-center">
                                        <FaSyncAlt color="#8b5cf6" size={40} />
                                        <div className="text-2xl">Adaptability</div>
                                    </div>

                                    <div className="flex gap-1">
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="red" size={30} />
                                        <FaStar color="black" size={30} />
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;