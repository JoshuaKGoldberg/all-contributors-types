/**
 * Which kind of repository page a contribution type links to, if any.
 */
export type ContributionLinkKind = "commits" | "issues" | "reviews";

export interface ContributionLinkOptions {
	/**
	 * Username of the contributor, if known.
	 */
	login?: string;

	/**
	 * Name of the repository, such as `"all-contributors-types"`.
	 */
	projectName: string;

	/**
	 * Owner of the repository, such as `"JoshuaKGoldberg"`.
	 */
	projectOwner: string;

	/**
	 * Base URL of the repository host, if not the default for `repoType`.
	 */
	repoHost?: string;

	/**
	 * Which repository host to create links for.
	 * @default "github"
	 */
	repoType?: RepoType;
}

export interface ContributionType {
	/**
	 * Human-readable description, such as `"Bug reports"`.
	 */
	description: string;

	/**
	 * Which kind of repository page the contribution type links to, if any.
	 */
	link?: ContributionLinkKind;

	/**
	 * Emoji representing the contribution type, such as `"🐛"`.
	 */
	symbol: string;
}

/**
 * Repository hosts supported by All Contributors.
 */
export type RepoType = "github" | "gitlab";
