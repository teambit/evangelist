export type ComponentHighlightDetails = {
	displayName?: string;
	url?: string;
	version?: string;
};

export type ComponentHighlightDictionary = {
	[key: string]: ComponentHighlightDetails;
};

export type VersionMap = {
	[key: string]: string;
};
