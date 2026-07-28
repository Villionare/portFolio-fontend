import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { GiCupcake } from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';
import { PiSmileyXEyesFill } from 'react-icons/pi';

const ProfileDetails: React.FC = () => {
    return (
        <div className="flex">

            {/* first section - basic details */}
            <div className="flex-1 ">

                {/* name */}
                <div className="font-pixel8-bold flex items-baseline">

                    <div className="flex items-center">
                        <span className="text-5xl mr-2">
                            ABHAY SINGH
                        </span>

                        <MdVerified size={45} color="#27a2e7" />
                    </div>
                </div>

                <div>
                    <span className="font-pixel8-bold text-pink-600 uppercase tracking-wide">
                        Software engineer / Web developer
                    </span>
                </div>

                {/* username */}
                <div>
                    <span className="font-pixel8-bold text-xl">
                        @duedull
                    </span>
                </div>

                {/* bio */}
                <div className="font-pixel-mono-bold text-lg flex gap-1 items bg-center justify-start mt-2">
                    <PiSmileyXEyesFill size={30} color="" />
                    <span>
                        Living in fantacy suffering in reality
                    </span>
                </div>

                {/* location */}
                <div className="font-pixel-mono-bold flex gap-1 items bg-center justify-start">
                    <FaLocationDot size={30} />
                    <span>Faridabad, Haryana - 121003</span>
                </div>

                {/* birthday */}
                <div className="font-pixel-mono-bold flex gap-1 items bg-center justify-start">
                    <GiCupcake size={30} />
                    <span>11 July 2004</span>
                </div>
            </div>

            {/* section 2 message */}
            <div className="font-pixel-bold mt-6 flex-1 flex items-start justify-center rounded-2xl">

                <div className=" bg-white p-1 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">

                    <div className="w-[40vw] bg-[#0a0d16] border-2 border-black p-2 rounded-2xl">

                        <div className=" text-white">

                            <ul className="space-y-1 text-xl text-gray-200">
                                <li className="before:content-['>'] before:text-green-500 before:font-bold before:mr-3">
                                    Code. Create. Innovate.
                                </li>

                                <li className="before:content-['>'] before:text-green-500 before:font-bold before:mr-3">
                                    Building digital experiences
                                </li>

                                <li className="before:content-['>'] before:text-green-500 before:font-bold before:mr-3">
                                    that make an impact.
                                </li>

                                <li className="before:content-['>'] before:text-green-500 before:font-bold before:mr-3">
                                    Let's build the future together!
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProfileDetails;