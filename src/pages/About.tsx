import React from 'react';
import ProfileImage from '../components/ProfileImage';
import Socials from '../components/Socials';
import coverImage from "../assets/backgrounds/about_bg.png";

const About: React.FC = () => {
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
                <div className="flex flex-col border gap-4 border-red-600 mt-4">
                    <div className="text-orange-300 text-5xl bg-pink-500 px-4 border-6 border-black w-fit">
                        <span>
                            ABOUT ME
                        </span>
                    </div>

                    <div className="border border-pink-600 text-2xl">
                        <span>
                            My name is Abhay Singh and I am a student of BCA (2025). I have a keen interest in web development and software development aimed at solving various issues.
                            My interest started in programming during school when I began learning HTML and CSS. What started as a curiosity led me to learn multiple languages like Java, Spring boot, React etc. over the years while developing various personal projects.
                            After finishing my education, I realized that I did not want to work in the roles available to me. Instead of starting with some job, I thought of focusing on learning and building better applications each day.
                            This time, I am looking for a job opportunity where I can work and learn from professionals at the same time.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;