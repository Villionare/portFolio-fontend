import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

const fetchGithubUser = async (username: string) => {
  
    const { data } = await octokit.request( "GET /users/{username}/repos",
  {
    username,
    sort: "updated",
    per_page: 100,
  });

  return data;
  
}

// total stars
// const totalStars = repos.reduce(
//   (sum, repo) => sum + repo.stargazers_count,
//   0
// );

export default fetchGithubUser;