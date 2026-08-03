import { Octokit } from "octokit";
import type { GitHubUser } from "../types/githubApiData";

        const fetchProfile = async (): Promise<GitHubUser> => {

            const octokit = new Octokit({ auth: import.meta.env.GITHUB_ACC_TOCKEN });

            const { data } = await octokit.request("GET /users/{username}", {
                username: "villionare",
            });
            
            return data;
        }
            
export default fetchProfile;