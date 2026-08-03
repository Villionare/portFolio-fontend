import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

const fetchGithubUser = async (username: string) => {
  
    const { data } = await octokit.request(  "GET /repos/{owner}/{repo}/commits",
  {
    owner: username,
    repo: "my-project",
    per_page: 100,
  });

  return data;
  
}

export default fetchGithubUser;