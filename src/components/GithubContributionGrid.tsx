import React from 'react';
import useGithubContributions from '../hooks/useGithubContributions';

const ContributionGrid: React.FC = () => {

    const { data: contributions, isLoading, error } = useGithubContributions("Villionare");

    if (error) {
        return <div className="text-yellow-300">Error happened while loading</div>
    }

    if (isLoading) {
        return <div className="text-white">Loading Graph...</div>
    }

    const contributions2026 =
        contributions?.contributions.filter((day) =>
            day.date.startsWith("2026-")
        ) ?? [];

    return (
        <div className="grid grid-flow-col grid-rows-7 gap-[2px]">
            <span>
            </span>
            {contributions2026?.map((day) => (
                <div
                    key={day.date}
                    title={`${day.date} • ${day.count} contributions`}
                    className={`w-3 h-3 rounded-sm ${day.level === 0
                        ? "bg-neutral-800"
                        : day.level === 1
                            ? "bg-green-900"
                            : day.level === 2
                                ? "bg-green-700"
                                : day.level === 3
                                    ? "bg-green-500"
                                    : "bg-green-300"
                        }`}
                />
            ))}
        </div>
    );
};

export default ContributionGrid;