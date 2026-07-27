import React from 'react';
import coverImage from "../assets/background.png";
import ProfileImage from '../components/ProfileImage';
import Socials from '../components/Socials';
import ProfileDetails from '../components/ProfileDetails';
import LowerBar from '../components/LikesAndFollowers';
import DownloadResume from '../components/DownloadResume';

const Section: React.FC = () => {
    return (
        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl shadow-[inset_0_0_0_4px_#232846]" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">
                <div className="absolute -bottom-16 left-6">
                    <ProfileImage height="h-45" width="w-45" />
                </div>

            </div>

            {/* //lower profile detailes */}
            <div className="bg-amber-200 pl-6 border border-b-blue-800 rounded-2xl">

                <Socials />

                <ProfileDetails />

                <LowerBar />

                <DownloadResume />
            </div>
        </div>
    );
};

export default Section;