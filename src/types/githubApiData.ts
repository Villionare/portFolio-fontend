// types/github.ts

import type { Endpoints } from "@octokit/types";

export type GitHubUser =
  Endpoints["GET /users/{username}"]["response"]["data"];