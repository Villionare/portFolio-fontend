import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: import.meta.env.GITHUB_ACC_TOCKEN,
});

export interface GithubProfileData {
  user: Awaited<ReturnType<typeof octokit.request<"GET /users/{username}">>>["data"];
  repos: Awaited<ReturnType<typeof octokit.request<"GET /users/{username}/repos">>>["data"];
  events: Awaited<ReturnType<typeof octokit.request<"GET /users/{username}/events/public">>>["data"];
  commits: Awaited<ReturnType<typeof octokit.request<"GET /repos/{owner}/{repo}/commits">>>["data"];
}
