type SemVer = string;
type TimeStamp = string;
type ComponentID = string;

function toString(id: ComponentID){
	return id
}

function toCdnUrl(id: ComponentID) {
	return `http://esm.bit...${id}`;
}

function toNpmString(id: ComponentID){ 
	return id.replace('/', '.');
}

enum JobStatus {
	fail,
	pass,
	running,
	pending,
}

export type Component = {
	id: ComponentID,
	latest: SemVer,
}

export type Version = {
	id: SemVer,
	time: TimeStamp,
	tags: string[],
	ciStatus: JobStatus
	testStatus: JobStatus
	message: string,
	contributors: AccountObj[]
}

export type AccountObj = {
	name: string,
	type: AccountTypes,
	displayName?: string,
	profileImage?: string,
};

export enum AccountTypes {
	org = 'organization',
	user = 'user',
	default = 'default',
}


// [
// 	{isLatest: true}, {}, {}, {isLatest: false}
// ]