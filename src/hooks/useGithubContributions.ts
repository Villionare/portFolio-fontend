import { useQuery } from "@tanstack/react-query";
import fetchGithubContributions from "../api/github/fetchContributions";

const useGithubContributions = (username: string) => {
  return useQuery({
    queryKey: ["github-contributions", username],
    queryFn: () => fetchGithubContributions(username),
    staleTime: 1000 * 60 * 30,
  });
};

export default useGithubContributions;