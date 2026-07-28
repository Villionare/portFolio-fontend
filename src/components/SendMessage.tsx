import React from 'react';

const SendMessage: React.FC = () => {
    return (
        <a href="https://wa.me/919310749050" target="_blank">

            <button className="bg-blue-500 text-2xl px-4 py-2 text-white rounded-md drop-shadow-[0_7px_0px_rgba(0,0,0,0.35)] cursor-pointer hover:bg-blue-600 border-2 border-black">
                SEND MESSAGE
            </button>
        </a>
    );
};

export default SendMessage;