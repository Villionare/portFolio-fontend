import ProfileImage from "../components/ProfileImage";
import useGitHubUserTanstack from "../hooks/useGithubUserTanstack";
import coverImage from "../assets/backgrounds/github_bg.png";
import { FaBook, FaCode, FaCodeBranch, FaFolder, FaGithub, FaJava, FaJs, FaQuoteLeft, FaStar, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import RepoCard from "../components/RepoCard";
import { formatDistanceToNow } from "date-fns";
import ContributionGrid from "../components/GithubContributionGrid";
import { FaCodePullRequest, FaGolang } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";

const Github: React.FC = () => {

    const { data, isLoading, error } = useGitHubUserTanstack("villionare", "portFolio-fontend");

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
                <div className="font-pixel-mono-hb flex items-center justify-around gap-2 w-full">
                    {/* Repositories */}
                    <div className="group w-28 rounded-lg border-2 border-orange-500 bg-[#FFF4DE] p-3 shadow-[2px_2px_0_#9A9A9A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3d3d3d]">
                        <FaBook className="mx-auto text-3xl text-orange-600 transition-transform group-hover:scale-110" />
                        <p className="font-pixel-hb mt-2 text-center uppercase tracking-wider text-zinc-700">
                            Repos
                        </p>
                        <p className="text-center text-3xl font-black text-zinc-900">
                            {data.user.public_repos}
                        </p>
                    </div>

                    {/* Followers */}
                    <div className="group w-28 rounded-lg border-2 border-sky-500 bg-[#EEF7FF] p-3 shadow-[2px_2px_0_#9A9A9A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3d3d3d]">
                        <FaUsers className="mx-auto text-3xl text-sky-600 transition-transform group-hover:scale-110" />
                        <p className="font-pixel-hb mt-2 text-center uppercase tracking-wider text-zinc-700">
                            Followers
                        </p>
                        <p className="text-center text-3xl font-black text-zinc-900">
                            {data.user.followers}
                        </p>
                    </div>

                    {/* Following */}
                    <div className="group w-28 rounded-lg border-2 border-emerald-500 bg-[#F0FFF5] p-3 shadow-[2px_2px_0_#9A9A9A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3d3d3d]">
                        <FaUserFriends className="mx-auto text-3xl text-emerald-600 transition-transform group-hover:scale-110" />
                        <p className="font-pixel-hb mt-2 text-center uppercase tracking-wider text-zinc-700">
                            Following
                        </p>
                        <p className="text-center text-3xl font-black text-zinc-900">
                            {data.user.following}
                        </p>
                    </div>

                    {/* Stars */}
                    <div className="group w-28 rounded-lg border-2 border-yellow-500 bg-[#FFFCEB] p-3 shadow-[2px_2px_0_#9A9A9A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3d3d3d]">
                        <FaStar className="mx-auto text-3xl text-yellow-500 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                        <p className="font-pixel-hb mt-2 text-center uppercase tracking-wider text-zinc-700">
                            Stars
                        </p>
                        <p className="text-center text-3xl font-black text-zinc-900">
                            0
                        </p>
                    </div>

                    {/* Commits */}
                    <div className="group w-28 rounded-lg border-2 border-pink-500 bg-[#FFF2F7] p-3 shadow-[2px_2px_0_#9A9A9A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3d3d3d]">
                        <FaCodeBranch className="mx-auto text-3xl text-violet-600 transition-transform group-hover:scale-110" />
                        <p className="font-pixel-hb mt-2 text-center uppercase tracking-wider text-zinc-700">
                            Commits
                        </p>
                        <p className="text-center text-3xl font-black text-zinc-900">
                            312
                        </p>
                    </div>

                    {/* Pull Requests */}
                    <div className="group w-28 rounded-lg border-2 border-pink-500 bg-[#FFF2F7] p-3 shadow-[2px_2px_0_#9A9A9A] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3d3d3d]">
                        <FaCodePullRequest className="mx-auto text-3xl text-pink-600 transition-transform group-hover:scale-110" />
                        <p className="font-pixel-hb mt-2 text-center uppercase tracking-wider text-zinc-700">
                            PRs
                        </p>
                        <p className="text-center text-3xl font-black text-zinc-900">
                            18
                        </p>
                    </div>
                </div>
            </div>

            {/* middle section */}
            <div className="bg-amber-200 flex border border-amber-900 rounded-2xl px-4 py-2">

                {/* first section*/}
                <div className="flex flex-col gap-3 w-fit p-2">

                    {/* About Me */}
                    <fieldset className="font-pixel-mono-bold max-w-[20vw] rounded-2xl border-2 border-black bg-[#fbefda] p-3 shadow-[3px_3px_0_#707070]">
                        <legend className="flex items-center justify-center gap-2 rounded-2xl border-4 border-white bg-[#080e1a] px-4 py-2 text-white">
                            <FaUser />
                            <span>ABOUT ME</span>
                        </legend>

                        <div className="mt-1 rounded-xl border-2 border-zinc-800 bg-[#fff8ec] p-2">

                            <div className="mb-3 flex items-center gap-2 border-b border-zinc-300 pb-2">
                                <FaQuoteLeft className="text-orange-500" />
                                <span className="text-xs uppercase tracking-widest text-zinc-600">
                                    Bio
                                </span>
                            </div>

                            <p className="min-h-fit text-sm leading-5 text-zinc-800">
                                {data.user.bio || (
                                    <>
                                        Full-Stack Developer focused on building
                                        clean, scalable web applications with
                                        React, TypeScript, Java and Spring Boot.
                                        Always learning new technologies.
                                    </>
                                )}
                            </p>

                        </div>
                    </fieldset>

                    {/* Top Languages */}
                    <fieldset className="font-pixel-mono-bold max-w-[20vw] rounded-2xl border-2 border-black bg-[#fbefda] p-2">
                        <legend className="flex items-center justify-center gap-2 rounded-2xl border-4 border-white bg-[#080e1a] px-4 py-2 text-white">
                            <FaCode />
                            <span>TOP LANGUAGES</span>
                        </legend>

                        <div className="mt-2 space-y-2 text-sm">

                            <div className="flex items-center justify-between rounded-lg border border-zinc-300 bg-[#fff8ec] px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <FaJs className="text-yellow-400" />
                                    <span>JavaScript</span>
                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#f1e05a]" />
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-zinc-300 bg-[#fff8ec] px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <FaJava className="text-red-600" />
                                    <span>Java</span>
                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#b07219]" />
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-zinc-300 bg-[#fff8ec] px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <FaCode className="text-blue-600" />
                                    <span>C</span>
                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#555555]" />
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-zinc-300 bg-[#fff8ec] px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <FaGolang className="text-cyan-500" />
                                    <span>Go</span>
                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#00ADD8]" />
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-zinc-300 bg-[#fff8ec] px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <SiKotlin className="text-purple-600" />
                                    <span>Kotlin</span>
                                </div>
                                <div className="h-3 w-3 rounded-full bg-[#A97BFF]" />
                            </div>

                        </div>
                    </fieldset>
                </div>

                {/* RIGHT SIDE */}
                <fieldset className="font-pixel-mono-bold flex-1 p-2">
                    <legend className="flex items-center justify-center gap-2 bg-[#080e1a] p-2 text-white rounded-2xl border-4 border-white">
                        <FaFolder color='white' />
                        <span>POPULAR REPOSITORIES</span>
                    </legend>

                    {/* repos grid */}
                    <div className="flex flex-col">

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {data.repos.slice(0, 9).map((repo) => (
                                <RepoCard
                                    name={repo.name}
                                    description={repo.description ?? "No description"}
                                    language={repo.language ?? "Unknown"}
                                    stars={repo.stargazers_count}
                                    forks={repo.forks_count}
                                    url={repo.html_url}
                                />
                            ))}
                        </div>
                    </div>

                </fieldset>

            </div>

            {/* lower dark portion */}
            <div className="p-1 bg-white rounded-2xl outline-3 outline-black">
                <div className="bg-[#060b14] flex flex-col gap-4 rounded-2xl p-2">

                    {/* recent activily */}
                    <fieldset className="flex-1 font-pixel-mono-bold p-1 border-b border-white">

                        <legend className="flex items-center justify-center gap-2 bg-green-700 p-1 text-white rounded-2xl \">
                            <FaStar color='white' />
                            <span>RECENT ACTIVITY</span>
                        </legend>

                        {/* output the recent activity of any project i am currently working on */}
                        <div className="flex flex-col  h-40 no-scrollbar overflow-x-hidden overflow-y-auto shrink-0">
                            {data.events.map((event, i) => (

                                <div className="flex text-white w-full" key={event.id}>

                                    {(() => {
                                        const repo = event.repo.name.split("/")[1];

                                        const commit = data.commits.find(
                                            (commit) =>
                                                commit.sha === (event.payload as { head?: string }).head
                                        );

                                        const time = event.created_at
                                            ? formatDistanceToNow(new Date(event.created_at), {
                                                addSuffix: true,
                                            })
                                            : "Unknown date";

                                        return <div key={event.id} className="flex justify-between  w-full">
                                            <span>
                                                <span className="text-[#2fff0d]">{i + " "}</span>
                                                {event.type}
                                                <span className="text-yellow-400">
                                                    {" " + repo + " "}
                                                </span>
                                                <span className="text-orange-500">
                                                    - {commit?.commit.message}
                                                </span>
                                            </span>
                                            <span>{time}</span>
                                        </div>
                                    })()}
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    {/* graph */}
                    <fieldset className="flex-1 flex font-pixel-mono-bold p-2">
                        <legend className="flex items-center justify-center gap-2 bg-green-700 p-1 text-white rounded-2xl ">
                            <FaStar color='white' />
                            <span>CONTRIBUTION GRAPH</span>
                        </legend>

                        <fieldset className="border border-white w-fit p-2">
                            <legend className="text-white">
                                For the year of 2026
                            </legend>

                            <ContributionGrid />
                        </fieldset>

                        {/* GITHUB STREAK */}
                        {/* <fieldset className="flex-1/5 font-pixel-mono-bold p-1 border-x border-white">
                            <legend className="flex items-center justify-center gap-2 bg-green-700 p-1 text-white rounded-2xl ">
                                <FaStar color='white' />
                                <span>STREAK</span>
                            </legend>

                        </fieldset> */}
                    </fieldset>
                </div>
            </div>
        </div>


    );
};

export default Github;