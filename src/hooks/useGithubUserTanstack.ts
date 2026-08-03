import { useQuery } from "@tanstack/react-query";
import fetchGithubUser from "../api/github/fetchUserProfile";

const useGitHubUserTanstack = (username: string) => {
    return useQuery({
        queryKey: ["accessUserTanstack", username],
        queryFn: () => fetchGithubUser(username),
        staleTime: 1000 * 60 * 5,
    });
}

export default useGitHubUserTanstack;