import React from "react";

interface ButtonProps {
    innerText?: string;
    icon?: React.ReactNode;
    href?: string;
}

const A_Button: React.FC<ButtonProps> = ({ innerText, icon, href = "#" }) => {
    return (
        <a
            href={href}
            className="bg-white h-fit p-2 rounded-md border-2 border-black shadow-[2px_2px_0px_#3d3d3d] cursor-pointer hover:bg-gray-300"
            target="_blank"
        >
            {icon}
            <span>{innerText}</span>
        </a>
    );
};

export default A_Button;