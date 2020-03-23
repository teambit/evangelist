export type ComponentHighlightDetails = {
	displayName?: string;
	url?: string;
	version?: string;
};

export type ComponentHighlightDictionary = {
	[componentId: string]: ComponentHighlightDetails;
};

export type VersionMap = {
	[componentId: string]: string;
};
