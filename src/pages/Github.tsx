import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
import type { GitHubUser } from '../types/githubApiData';
import fetchProfile from '../services/getGithubUser';

const Github: React.FC = () => {


    const [userData, setUserData] = useState<GitHubUser | null>(null);

    useEffect(() => {
        setUserData(fetchProfile());
    }, []);
    return <div className="">github</div>
};

export default Github;