import ProfileImage from "../components/ProfileImage";
import useGitHubUserTanstack from "../hooks/useGithubUserTanstack";
import coverImage from "../assets/backgrounds/github_bg.png";
import { FaFolder, FaGithub } from "react-icons/fa";

const Github: React.FC = () => {

    const { data, isLoading, error } = useGitHubUserTanstack("villionare");

    console.log(data);


    if (isLoading) {
        return (
            <div className="w-full max-w-6xl mx-auto p-10 text-center text-slate-600 font-semibold">
                Loading profile...
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="w-full max-w-6xl mx-auto p-10 text-center text-red-600 font-semibold ">
                Failed to load GitHub profile.
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${coverImage})` }}>

            {/* transparent box for cover */}
            <div className="relative h-40">

                <div className="font-pixel-bold flex flex-col gap-2 h-full justify-center items-center">
                    <div className="flex items-center justify-center gap-2 bg-[#080e1a] p-4 text-white text-3xl rounded-2xl border-4 border-white shadow-[6px_6px_0px_#3d3d3d]">
                        <span>{"<"}</span>
                        <FaGithub color='white' />
                        <span>GITHUB PROFILE</span>
                        <span>{"/>"}</span>
                    </div>

                    <span className="font-pixel-mono-bold text-2xl text-white">Checkout my github profile</span>
                </div>

                <div className="absolute -bottom-25 left-6">
                    <ProfileImage height="h-45" width="w-45" profileImg={data.avatar_url} />
                </div>

            </div>

            {/* //lower profile detailes */}

            {/* top bar */}
            <div className="bg-amber-200 flex border border-b-blue-800 rounded-2xl h-fit">

                {/* empty container for space */}
                <div className="border-2 shrink-0 border-red-500 w-60 h-30">
                    {/* extra space profile image is taking */}
                </div>

                <div className="font-pixel-hb flex flex-col w-full pl-2 border-2 border-black">

                    {/* main name */}
                    <div className="flex flex-col">
                        <span className="text-5xl">{data.name}</span>
                    </div>

                    {/* username */}
                    <div className="text-blue-500 text-2xl">@{data.login}</div>

                    {/* location */}
                    <div className="text-gray-700 text-lg">@{data.location ?? "location null"}</div>

                    {/* profile url */}
                    <div className="text-blue-500 text-lg">@{data.html_url ?? "url null"}</div>

                    {/* joined on */}
                    <div className="text-gray-700 text-lg">
                        Joined On:{" "}
                        {data.created_at
                            ? new Date(data.created_at).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })
                            : "joined null"}
                    </div>
                </div>

                {/* container for information - repo, followers,following, etc */}
                <div className="flex border-2 border-pink-600">

                    {/* repositores */}
                    <div className="flex flex-col items-center justify-center">

                        <div className="">
                            <FaFolder />
                        </div>

                        <div className=""><span>Repostories</span></div>
                        <div className=""><span>{data.public_repos}</span></div>
                    </div>

                    {/* repositores */}
                    <div className="flex flex-col items-center justify-center">

                        <div className="">
                            <FaFolder />
                        </div>

                        <div className=""><span>Followers</span></div>
                        <div className=""><span>{data.followers}</span></div>
                    </div>

                    {/* repositores */}
                    <div className="flex flex-col items-center justify-center">

                        <div className="">
                            <FaFolder />
                        </div>

                        <div className=""><span>Following</span></div>
                        <div className=""><span>{data.following}</span></div>
                    </div>

                    {/* repositores */}
                    <div className="flex flex-col items-center justify-center">

                        <div className="">
                            <FaFolder />
                        </div>

                        <div className=""><span>Stars Earned</span></div>
                        <div className=""><span>0</span></div>
                    </div>
                </div>


                {/* repositores */}
                <div className="flex flex-col items-center justify-center">

                    <div className="">
                        <FaFolder />
                    </div>

                    <div className=""><span>Commits</span></div>
                    <div className=""><span></span></div>
                </div>
            </div>
        </div>


        </div >);
};

export default Github;