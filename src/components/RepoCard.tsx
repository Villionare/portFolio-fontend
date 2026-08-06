import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface RepoCardProps {
    name: string;
    description: string;
    language: string;
    stars: number | undefined;
    forks: number | undefined;
    url: string
}

const RepoCard: React.FC<RepoCardProps> = ({ name = "diddy repo", description = "temprory repo placeholder", language = "english", stars = 4, forks = 0, url = "#" }) => {
    return (
        <div className="min-w-40 flex flex-col justify-center rounded-xl border-2 border-zinc-400 bg-[#F9EFD7] shadow-[3px_3px_0px_#7c7c7c] transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#7c7c7c]">

            {/* Header */}
            <div className="flex items-start justify-between p-4 pb-2">
                <div>
                    <h2 className="text-lg font-bold text-blue-700">
                        {name}
                    </h2>

                    <p className="mt-1 line-clamp-2 text-sm text-zinc-700">
                        {description}
                    </p>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-zinc-500 bg-[#FFE8B2] p-2 transition-colors hover:bg-[#FFD97A]"
                    aria-label={`Open ${name} repository`}
                >
                    <FiArrowUpRight size={18} />
                </a>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-zinc-300 px-4 py-3">

                {/* Language */}
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-green-500 text-xs font-bold text-white">
                        JS
                    </div>

                    <span className="font-medium text-zinc-800">
                        {language}
                    </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-zinc-800">

                    <div className="flex items-center gap-1">
                        ⭐
                        <span className="font-semibold">{stars}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        🍴
                        <span className="font-semibold">{forks}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RepoCard;