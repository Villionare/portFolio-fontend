import { octokit, type GithubProfileData } from "../../types/githubApiData";

//here we are calling all the api endpoints from one fetch fuction then returning the data altougther

const fetchGithubUser = async (username: string, repo: string): Promise<GithubProfileData> => {
  
  const [
    { data: user },
    { data: repos },
    { data: events },
    { data: commits },
  ] = await Promise.all([
    octokit.request("GET /users/{username}", {
      username,
    }),

    octokit.request("GET /users/{username}/repos", {
      username,
      sort: "updated",
      per_page: 100,
    }),

    octokit.request("GET /users/{username}/events/public", {
      username,
      per_page: 100,
    }),
    
    octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: username,
      repo,
      per_page: 100,
    }),
  ]);

  return {
    user,
    repos,
    events,
    commits
  };
};

export default fetchGithubUser;