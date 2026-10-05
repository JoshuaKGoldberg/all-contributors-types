import createUpstreamContributionTypes from "all-contributors-cli/dist/util/contribution-types.js";
import { describe, expect, it } from "vitest";

import { contributionTypes } from "./contributionTypes.ts";
import { createContributionLink } from "./createContributionLink.ts";
import { RepoType } from "./types.ts";

const login = "contributor";
const projectName = "example-repository";
const projectOwner = "example-owner";

function renderUpstreamLink(link: string, repoType: RepoType) {
	const values: Record<string, string> = {
		[`options.repoHost || "https://${repoType}.com"`]: `https://${repoType}.com`,
		"contributor.login": login,
		"options.projectName": projectName,
		"options.projectOwner": projectOwner,
	};

	return link.replaceAll(/<%= (.+?) %>/g, (_, key: string) => values[key]);
}

describe.each(["github", "gitlab"] as const)("%s", (repoType) => {
	const upstream = createUpstreamContributionTypes({ repoType });

	it("has the same contribution types as all-contributors-cli", () => {
		expect(Object.keys(contributionTypes).sort()).toEqual(
			Object.keys(upstream).sort(),
		);
	});

	it.each(Object.keys(upstream))(
		"matches all-contributors-cli for %s",
		(name) => {
			const expected = upstream[name];
			const actual = contributionTypes[name as keyof typeof contributionTypes];

			expect(actual.description).toBe(expected.description);
			expect(actual.symbol).toBe(expected.symbol);
			expect(
				createContributionLink(name as keyof typeof contributionTypes, {
					login,
					projectName,
					projectOwner,
					repoType,
				}),
			).toBe(
				expected.link
					? renderUpstreamLink(expected.link, repoType)
					: `#${name}-${login}`,
			);
		},
	);
});
