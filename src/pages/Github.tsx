import ProfileImage from "../components/ProfileImage";
import useGitHubUserTanstack from "../hooks/useGithubUserTanstack";
import coverImage from "../assets/backgrounds/github_bg.png";
import { FaCode, FaFolder, FaGithub, FaUser } from "react-icons/fa";
import RepoCard from "../components/RepoCard";

const Github: React.FC = () => {

    const { data, isLoading, error } = useGitHubUserTanstack("villionare", "portFolio-fontend");

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
                    <ProfileImage height="h-45" width="w-45" profileImg={data.user.avatar_url} />
                </div>

            </div>

            {/* //lower profile detailes */}

            {/* top bar */}
            <div className="bg-amber-200 flex border border-orange-500 rounded-2xl h-fit">

                {/* empty container for space */}
                <div className="shrink-0 w-60 h-30">
                    {/* extra space profile image is taking */}
                </div>

                <div className="font-pixel-hb flex flex-col px-2 mr-2">

                    {/* main name */}
                    <div className="flex flex-col">
                        <span className="text-5xl">{data.user.name}</span>
                    </div>

                    {/* username */}
                    <div className="text-blue-500 text-2xl">@{data.user.login}</div>

                    {/* location */}
                    <div className="text-gray-700 text-lg">@{data.user.location ?? "location null"}</div>

                    {/* profile url */}
                    <div className="text-blue-500 text-lg">@{data.user.html_url ?? "url null"}</div>

                    {/* joined on */}
                    <div className="text-gray-700 text-lg">
                        Joined On:{" "}
                        {data.user.created_at
                            ? new Date(data.user.created_at).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })
                            : "joined null"}
                    </div>
                </div>

                {/* container for information - repo, followers,following, etc */}
                <div className="flex items-center justify-between w-full">

                    {/* repositores */}
                    <div className="flex-1 flex flex-col items-center justify-center  border-x border-orange-500">

                        <div className="">
                            <FaFolder size={30} />
                        </div>

                        <div className=""><span>Repostories</span></div>
                        <div className=""><span>{data.user.public_repos}</span></div>
                    </div>

                    {/* followers */}
                    <div className="flex-1 flex flex-col items-center justify-center  border-r border-orange-500">

                        <div className="">
                            <FaFolder size={30} />
                        </div>

                        <div className=""><span>Followers</span></div>
                        <div className=""><span>{data.user.followers}</span></div>
                    </div>

                    {/* following */}
                    <div className="flex-1 flex flex-col items-center justify-center  border-r border-orange-500">

                        <div className="">
                            <FaFolder size={30} />
                        </div>

                        <div className=""><span>Following</span></div>
                        <div className=""><span>{data.user.following}</span></div>
                    </div>

                    {/* stars Earned */}
                    <div className="flex-1 flex flex-col items-center justify-center  border-r border-orange-500">

                        <div className="">
                            <FaFolder size={30} />
                        </div>

                        <div className=""><span>Stars Earned</span></div>
                        <div className=""><span>0</span></div>
                    </div>

                    {/* commits */}
                    <div className="flex-1 flex flex-col items-center justify-center  border-r border-orange-500">

                        <div className="">
                            <FaFolder size={30} />
                        </div>

                        <div className=""><span>Commits</span></div>
                        <div className=""><span>312</span></div>
                    </div>

                    {/* pull requests */}
                    <div className="flex-1 flex flex-col items-center justify-center  border-r border-orange-500">

                        <div className="">
                            <FaFolder size={30} />
                        </div>

                        <div className=""><span>pull requests</span></div>
                        <div className=""><span>18</span></div>
                    </div>
                </div>

            </div>

            {/* middle section */}
            <div className="bg-amber-200 flex border border-amber-900 rounded-2xl px-4 py-2">

                {/* first section*/}
                <div className="flex flex-col gap-3 w-fit p-2 border border-red-500">

                    {/* about me  */}
                    <fieldset className="font-pixel-mono-bold bg-[#fbefda] rounded-2xl p-2 border-2 border-black max-w-[20vw]">
                        <legend className="flex items-center justify-center gap-2 bg-[#080e1a] p-2 text-white rounded-2xl border-4 border-white">
                            <FaUser color='white' />
                            <span>ABOUT ME</span>
                        </legend>

                        <span>{data.user.bio}</span>
                    </fieldset>

                    {/* top languages */}
                    <fieldset className="font-pixel-mono-bold bg-[#fbefda] rounded-2xl p-2 border-2 border-black max-w-[20vw]">
                        <legend className="flex items-center justify-center gap-2 bg-[#080e1a] p-2 text-white rounded-2xl border-4 border-white">
                            <FaCode color='white' />
                            <span>TOP LANGUAGES</span>
                        </legend>

                        <div className="flex flex-col">
                            <div className="">JAVASCRIPT</div>
                            <div className="">JAVASCRIPT</div>
                            <div className="">JAVASCRIPT</div>
                            <div className="">JAVASCRIPT</div>
                            <div className="">JAVASCRIPT</div>
                            <div className="">JAVASCRIPT</div>
                        </div>
                    </fieldset>
                </div>

                <fieldset className="font-pixel-mono-bold flex-1 p-2 border border-purple-800">
                    <legend className="flex items-center justify-center gap-2 bg-[#080e1a] p-2 text-white rounded-2xl border-4 border-white">
                        <FaFolder color='white' />
                        <span>POPULAR REPOSITORIES</span>
                    </legend>

                    {/* repos grid */}
                    <div className="flex flex-col">

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {data.repos.slice(0, 9).map((repo) => (
                                <RepoCard
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description ?? "No description provided."}
                                    language={repo.language ?? "Unknown"}
                                    stars={repo.stargazers_count}
                                    forks={repo.forks_count}
                                />
                            ))}
                        </div>
                    </div>

                </fieldset>

            </div>

            {/* lower dark portion */}
            <div className="p-1 bg-white rounded-2xl outline-3 outline-black">
                <div className="bg-[#060b14] flex h-40 rounded-2xl">
                    <div className="">Activity</div>
                    <div className="">Graph</div>
                    <div className="">Streak</div>
                </div>
            </div>
        </div>


    );
};

export default Github;