import React from 'react';
import ProfileImage from '../components/ProfileImage';
import coverImage from '../assets/backgrounds/contact.png';
import { FaCheckCircle, FaEnvelope, FaGithubSquare, FaLinkedin, FaWhatsappSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaPen } from 'react-icons/fa';
import Button from '../components/A_Buttons';
import { SiLeetcode } from 'react-icons/si';
import { BsFillSendFill, BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { ImUsers } from 'react-icons/im';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl shadow-[inset_0_0_0_4px_#232846]" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">

                <div className="font-pixel-bold flex flex-col gap-2 h-full justify-center items-center">
                    <div className="flex items-center justify-center gap-2 bg-[#080e1a] p-4 text-white text-3xl rounded-2xl border-4 border-white shadow-[6px_6px_0px_#3d3d3d]">
                        <span>✨</span>
                        <FaEnvelope color='yellow' />
                        <span>CONTACT ME</span>
                        <span>✨</span>
                    </div>

                    <span className="font-pixel-mono-bold text-2xl">Let's Connect and have some briefs about this crazy coding world.</span>
                </div>

                <div className="absolute -bottom-25 left-6">
                    <ProfileImage height="h-45" width="w-45" />
                </div>

            </div>

            {/* lower section */}
            <div className=" bg-amber-200 px-6 rounded-2xl">

                {/* flex containing two rows */}
                <div className="flex mt-6 mb-5">

                    {/* left section*/}
                    <div className="flex flex-col gap-4 pt-15  pr-5">

                        {/* contact info */}
                        <fieldset className="flex flex-col bg-[#f4e8d5] p-5 pb-2 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">
                                <IoMdContact size={30} color='#f1b757' />
                                <span>CONTACT INFO</span>
                            </legend>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-red-500 rounded-lg p-3">
                                    <FaEnvelope size={18} color={'white'} />
                                </div>

                                <div className="flex flex-col">
                                    <span>EMAIL</span>
                                    <span>abhay.sensez@gmail.com</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-green-500 rounded-lg p-3">
                                    <FaPhoneAlt size={18} color="white" />
                                </div>

                                <div className="flex flex-col">
                                    <span>PHONE</span>
                                    <span>+91 93107 49050</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2 border-b border-dotted border-amber-700">

                                <div className="bg-blue-500 rounded-lg p-3">
                                    <FaMapMarkerAlt size={18} color="white" />
                                </div>

                                <div className="flex flex-col">
                                    <span>LOCATION</span>
                                    <span>Faridabad, Haryana - 121003</span>
                                </div>

                            </div>

                            <div className="font-pixel-bold flex items-center gap-3 p-2">

                                <div className="bg-emerald-500 rounded-lg p-3">
                                    <FaCheckCircle size={18} color="white" />
                                </div>

                                <div className="flex flex-col">
                                    <span>AVAILABILITY</span>
                                    <span>Open for Opportunities</span>
                                </div>

                            </div>

                        </fieldset>

                        {/* lets connect */}
                        <fieldset className="flex flex-col bg-[#f4e8d5] pt-3 px-3 pb-4 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">

                                <ImUsers size={30} color='blue' />

                                <span>LETS CONNECT</span>
                            </legend>

                            <div className="flex justify-end gap-2 h-fit">

                                <Button icon={<FaGithubSquare size={25} color="#181717" />} href="https://github.com/Villionare" />

                                <Button icon={<FaLinkedin size={25} color="#0A66C2" />} href="https://www.linkedin.com/in/duedull/" />

                                <Button icon={<SiLeetcode size={25} color="#FFA116" />} href="https://leetcode.com/u/duedull/" />

                                <Button icon={<FaInstagramSquare size={25} color="#E4405F" />} href="https://www.instagram.com/2hrsleep1banana/" />

                                <Button icon={<BsTwitterX size={25} color="#000000" />} href="https://x.com/abhay_d_bugs" />

                                <Button icon={<FaWhatsappSquare size={25} color="#25D366" />} href="https://wa.me/919310749050" />

                                <Button icon={<MdEmail size={25} color="#EA4335" />} href="mailto:abhay.sensez@gmail.com" />

                            </div>
                        </fieldset>
                    </div>

                    {/* right section*/}
                    <div className="font-pixel-mono-hb flex-1 flex flex-col gap-6 ">

                        <div className="font-pixel-bold flex items-center justify-center bg-white p-1 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">

                            <div className="w-full bg-[#0a0d16] border-2 border-black p-2 rounded-2xl">

                                <ul className="space-y-1 text-xl text-gray-200">
                                    <li className="before:content-['>'] before:text-green-500 before:font-bold before:mr-3">
                                        Send me a message to give a suggestions about this portfolio or either just wanna connect just write something...
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <fieldset className="flex items-center bg-amber-200 p-5 pb-5 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#3d3d3d]">

                            <legend className="bg-[#080e1a] flex gap-1 items-center justify-center p-2 rounded-lg text-white font-pixel-hb8 shadow-[6px_6px_0px_#3d3d3d]">
                                <BsFillSendFill size={25} color='white' />
                                <span> SEND ME A MESSAGE</span>
                            </legend>

                            <form action="" className="flex flex-col gap-4 w-full">

                                {/* first column */}
                                <div className="flex gap-6">

                                    {/* name */}
                                    <div className="flex-1">

                                        <label htmlFor="name">Your Name</label><br />

                                        <div className="flex items-center gap-2 p-2 bg-white w-full rounded-lg border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">
                                            <input type="text" placeholder="Enter Your name..." id="name" name="name" className="flex-1 h-7 focus:outline-none" />
                                            <FaUser size={20} color="blue" />
                                        </div>
                                    </div>

                                    {/* email */}
                                    <div className="flex-1">

                                        <label htmlFor="email">Your Email</label><br />

                                        <div className="flex items-center gap-2 p-2 bg-white w-full rounded-lg border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">
                                            <input type="text" placeholder="Enter your Email..." id="email" name="email" className="flex-1 h-7 focus:outline-none" />
                                            <FaEnvelope size={20} color="red" />
                                        </div>

                                    </div>
                                </div>

                                {/* second column - SUBJECT */}
                                <div>
                                    <label htmlFor="subject">SUBJECT</label>
                                    <div className="flex items-center gap-2 p-2 bg-white w-full rounded-lg border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">
                                        <input type="text" placeholder="What is this About?" id="subject" name="subject" className="flex-1 h-7 focus:outline-none" />
                                        <IoDocumentTextOutline size={20} color="blue" />
                                    </div>
                                </div>

                                {/* your message - TEXT AREA */}
                                <div>
                                    <label htmlFor="subject">YOUR MESSAGE</label>
                                    <div className="flex items-end gap-2 p-2 bg-white w-full rounded-lg border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">
                                        <textarea placeholder="Type your Message here..." id="subject" name="subject" className="flex-1 h-30 focus:outline-none" />
                                        <FaPen size={20} color="blue" />
                                    </div>
                                </div>

                                <div className="flex justify-end w-full">

                                    <div className="flex items-center gap-2 bg-blue-500 text-2xl p-2 text-white rounded-md cursor-pointer hover:bg-blue-600 border-2 border-black shadow-[6px_6px_0px_#3d3d3d]">
                                        <BsFillSendFill size={25} color='white' />
                                        <input type="submit" value={'SEND MESSAGE'} />
                                    </div>

                                </div>
                            </form>
                        </fieldset>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;