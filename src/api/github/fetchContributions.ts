import type { GithubContributions } from "../../types/githubApiData";

const fetchGithubContributions = async (
  username: string
): Promise<GithubContributions> => {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch contribution graph");
  }

  return response.json();
};

export default fetchGithubContributions;