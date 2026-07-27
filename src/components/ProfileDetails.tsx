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
                <div className="flex items-baseline">

                    <div className="flex items-center">
                        <span className="text-5xl mr-2">
                            ABHAY SINGH
                        </span>

                        <MdVerified size={35} />
                    </div>
                </div>

                <div>
                    <span className="text-pink-600 uppercase tracking-wide">
                        Software engineer / Web developer
                    </span>
                </div>

                {/* username */}
                <div>
                    <span className="text-xl">
                        @duedull
                    </span>
                </div>

                {/* bio */}
                <div className="flex gap-1 items bg-center justify-start">
                    <PiSmileyXEyesFill size={20} color="" />
                    <span>
                        Living in fantacy suffering in reality
                    </span>
                </div>

                {/* location */}
                <div className="flex gap-1 items bg-center justify-start">
                    <FaLocationDot color="red" />
                    <span>Faridabad, Haryana - 121003</span>
                </div>

                {/* birthday */}
                <div className="flex gap-1 items bg-center justify-start">
                    <GiCupcake />
                    <span>11 July 2004</span>
                </div>
            </div>

            {/* section 2 message */}
            <div className="flex-1 flex items-start justify-center rounded-2xl">

                <div className=" bg-white p-1 rounded-2xl border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)]">

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