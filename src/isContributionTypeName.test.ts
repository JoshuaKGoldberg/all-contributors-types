import { describe, expect, it } from "vitest";

import { isContributionTypeName } from "./isContributionTypeName.ts";

describe(isContributionTypeName, () => {
	it.each(["a11y", "code", "projectManagement"])(
		"returns true for %s",
		(value) => {
			expect(isContributionTypeName(value)).toBe(true);
		},
	);

	it.each(["", "constructor", "unknown"])("returns false for %s", (value) => {
		expect(isContributionTypeName(value)).toBe(false);
	});
});
