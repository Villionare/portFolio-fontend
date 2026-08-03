import { Octokit } from "octokit";
import type { GithubUser } from "../../types/githubApiData";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

const fetchGithubUser = async (username: string): Promise<GithubUser> => {
  
    const { data } = await octokit.request("GET /users/{username}", {username});

  return data;
  
}

export default fetchGithubUser;