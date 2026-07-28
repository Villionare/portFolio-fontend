import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import {
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import Button from './A_Buttons';

const Socials: React.FC = () => {
    return (
        <div className="flex pt-2 pr-2 mb-2 justify-end gap-3 h-17">

            <Button icon={<FaGithubSquare size={30} color="#181717" />} href="https://github.com/Villionare" />

            <Button icon={<FaLinkedin size={30} color="#0A66C2" />} href="https://www.linkedin.com/in/duedull/" />

            <Button icon={<SiLeetcode size={30} color="#FFA116" />} href="https://leetcode.com/u/duedull/" />

            <Button icon={<FaInstagramSquare size={30} color="#E4405F" />} href="https://www.instagram.com/2hrsleep1banana/" />

            <Button icon={<BsTwitterX size={30} color="#000000" />} href="https://x.com/abhay_d_bugs" />

            <Button icon={<FaWhatsappSquare size={30} color="#25D366" />} href="https://wa.me/919310749050" />

            <Button icon={<MdEmail size={30} color="#EA4335" />} href="mailto:abhay.sensez@gmail.com" />

        </div>
    );
};

export default Socials;