import React from 'react';
import ProfileImage from '../components/ProfileImage';
import Socials from '../components/Socials';
import coverImage from "../assets/backgrounds/about_bg.png";

const About: React.FC = () => {
    return (
        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl shadow-[inset_0_0_0_4px_#232846]" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">

                <div className="absolute -bottom-25 left-6">
                    <ProfileImage height="h-45" width="w-45" />
                </div>

            </div>

            {/* //lower profile detailes */}
            <div className="bg-amber-200 pl-6 border border-b-blue-800 rounded-2xl">

                <Socials />


                <div className="flex gap-4 pr-4 mt-4 mb-4">

                    <div className="flex-2 flex flex-col gap-4">

                        <div className="font-pixel-bold flex items-center justify-center text-3xl border-6 border-black w-fit rounded-md shadow-[6px_6px_0px_#3d3d3d]">

                            <span className="bg-black p-3">
                                ⭐
                            </span>

                            <span className="flex-1 bg-red-500 text-yellow-200 p-3">
                                ABOUT ME
                            </span>

                        </div>

                        <div className="flex items-center justify-center gap-4">

                            <div className="flex-2 flex items-center justify-center p-1 border-4 border-black bg-white drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] rounded-md">

                                <span className="font-pixel-hb8 w-full h-full bg-[#fdefc8] p-4 border-2 border-orange-300">
                                    My name is Abhay Singh and I am a student of BCA (2025). I have a keen interest in web development and software development aimed at solving various issues.
                                    My interest started in programming during school when I began learning HTML and CSS. What started as a curiosity led me to learn multiple languages like Java, Spring boot, React etc. over the years while developing various personal projects.
                                    After finishing my education, I realized that I did not want to work in the roles available to me. Instead of starting with some job, I thought of focusing on learning and building better applications each day.
                                    This time, I am looking for a job opportunity where I can work and learn from professionals at the same time.
                                </span>

                            </div>

                            <div className="flex-0.5 font-pixel-hbsc flex-0.5 flex flex-col gap-3 bg-[#fbf3d8] border-4 border-black rounded-md py-2 px-5 h-fit">

                                <div className=" w-fit bg-[#1d2430] text-[#f6f0dc] rounded-md px-4 py-2 font-bold tracking-wider border-2 border-black">
                                    ✦ QUICK INFO
                                </div>

                                <div className="flex gap-2 items-center border-b-2 border-dotted border-red-400">

                                    <div className="text-4xl">📅</div>

                                    <div className="flex flex-col">

                                        <div className="font-black text-[#2a2a2a]">
                                            BCA Graduate
                                        </div>

                                        <div className="text-red-500 font-black">
                                            2025
                                        </div>

                                    </div>
                                </div>

                                <div className="flex gap-2 items-center border-b-2 border-dotted border-red-400">
                                    <div className="text-4xl">🎯</div>

                                    <div className="flex flex-col">

                                        <div className="font-black text-[#2a2a2a]">
                                            Passionate about
                                        </div>

                                        <div className="text-red-500 font-black">
                                            Code &amp; Problem Solving
                                        </div>

                                    </div>
                                </div>

                                <div className="flex gap-2 items-center border-b-2 border-dotted border-red-400">
                                    <div className="text-4xl">💻</div>

                                    <div className="flex flex-col">

                                        <div className="font-black text-[#2a2a2a]">
                                            Love building
                                        </div>

                                        <div className="text-red-500 font-black">
                                            Web Applications
                                        </div>

                                    </div>
                                </div>

                                <div className="flex gap-2 items-center border-red-400">
                                    <div className="text-4xl">🎮</div>

                                    <div className="flex flex-col">

                                        <div className="font-black text-[#2a2a2a]">
                                            Explorer of new
                                        </div>

                                        <div className="text-red-500 font-black">
                                            Technologies
                                        </div>

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

export default About;