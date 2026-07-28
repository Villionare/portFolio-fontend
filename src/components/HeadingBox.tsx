import React from "react";

interface HeadingBoxProps {
    icon?: React.ReactNode;
    text: string;
    padding?: string;

    textSize?: string;
    textColor?: string;

    iconBgColor?: string;
    iconSize?: string,
    containerBgColor?: string;
}

const HeadingBox: React.FC<HeadingBoxProps> = ({
    icon,
    text,

    padding = "p-3",
    textSize = "text-2xl",
    textColor = "text-yellow-200",

    iconSize = "text-3xl",
    iconBgColor = "bg-black",
    containerBgColor = "",
}) => {
    return (
        <div
            className={`w-fit rounded-xl ${containerBgColor}`}
        >
            <div className="flex items-center rounded-md border-[6px] border-black font-pixel-bold shadow-[6px_6px_0px_#3d3d3d]">

                <span className={`${iconSize} ${padding} ${iconBgColor}`}>
                    {icon}
                </span>

                <span className={`flex-1 ${padding} ${textSize} ${textColor}`}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default HeadingBox;