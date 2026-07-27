import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const LowerBar: React.FC = () => {
    return (
        <div className="flex justify-between mt-2 w-[90vw]">

            <div className="flex items-center justify-center border-2 bg-[#fad869] border-amber-400 w-50 rounded-xl">

                <div className="flex-1 flex flex-col items-center border-r border-amber-400">
                    <div className="flex items-center justify gap-1">
                        <FaHeart color="#e53344" />
                        <span>0</span>
                    </div>
                    <div className="">
                        <span>LIKES</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center border-l border-amber-400">
                    <div className="flex items-center justify gap-1">
                        <BiCommentDetail />
                        <span>0</span>
                    </div>
                    <div className="">
                        <span>POSTS</span>
                    </div>
                </div>
            </div>

            {/* like and send message */}
            <div className="flex items-center gap-4">

                <button className="bg-white p-2 rounded-md border-2 border-black drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-gray-300">
                    <AiFillLike size={30} />
                </button>

                <button className="bg-blue-500 text-2xl px-4 py-2 text-white rounded-md drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-blue-600 border-2 border-black">SEND MESSAGE</button>
            </div>
        </div >
    );
};

export default LowerBar;