import {
	type ContributionTypeName,
	contributionTypes,
} from "./contributionTypes.ts";

/**
 * Checks whether a string is the name of a known contribution type.
 */
export function isContributionTypeName(
	value: string,
): value is ContributionTypeName {
	return Object.hasOwn(contributionTypes, value);
}
