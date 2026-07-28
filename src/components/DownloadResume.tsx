import React from 'react';
import { IoMdCloudDownload } from 'react-icons/io';
import resume from "../../public/TechAbhay.pdf";

const DownloadResume: React.FC = () => {
    return (
        <div className="flex items-center mt-2 mr-7 justify-center border-t-2 border-red-500">

            <a
                href={resume}
                download="Abhay_Singh_Resume.pdf"
                className="flex gap-2 p-2 my-2 bg-pink-400 border-2 border-black rounded-2xl text-2xl drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-pink-500"
            >
                <IoMdCloudDownload />
                <span>Download Resume</span>
            </a>
        </div>
    );
};

export default DownloadResume;