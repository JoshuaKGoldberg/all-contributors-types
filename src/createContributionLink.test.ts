import { describe, expect, it } from "vitest";

import { createContributionLink } from "./createContributionLink.ts";

const options = {
	login: "contributor",
	projectName: "example-repository",
	projectOwner: "example-owner",
};

describe(createContributionLink, () => {
	it("returns an anchor when the contribution type has no link", () => {
		expect(createContributionLink("ideas", options)).toBe("#ideas-contributor");
	});

	it("returns an anchor without a login when the contribution type has no link and login is not provided", () => {
		expect(
			createContributionLink("ideas", { ...options, login: undefined }),
		).toBe("#ideas");
	});

	it("returns an anchor when the contribution type has a link and login is not provided", () => {
		expect(
			createContributionLink("code", { ...options, login: undefined }),
		).toBe("#code");
	});

	it("returns a GitHub link by default", () => {
		expect(createContributionLink("bug", options)).toBe(
			"https://github.com/example-owner/example-repository/issues?q=author%3Acontributor",
		);
	});

	it("returns a GitLab link when repoType is gitlab", () => {
		expect(
			createContributionLink("review", { ...options, repoType: "gitlab" }),
		).toBe(
			"https://gitlab.com/example-owner/example-repository/merge_requests?scope=all&state=all&approver_usernames[]=contributor",
		);
	});

	it("uses repoHost when provided", () => {
		expect(
			createContributionLink("code", {
				...options,
				repoHost: "https://github.example.com",
			}),
		).toBe(
			"https://github.example.com/example-owner/example-repository/commits?author=contributor",
		);
	});
});
