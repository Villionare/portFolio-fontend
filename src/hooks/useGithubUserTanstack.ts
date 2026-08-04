import { useQuery } from "@tanstack/react-query";
import fetchGithubUser from "../api/github/fetchUserProfile";

const useGitHubUserTanstack = (username: string, repo: string) => {
    return useQuery({
        queryKey: ["accessUserTanstack", username, repo],
        queryFn: () => fetchGithubUser(username, repo),
        staleTime: 1000 * 60 * 5,
    });
}

export default useGitHubUserTanstack;