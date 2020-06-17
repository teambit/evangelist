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

export enum JobStatus {
	fail = 'fail',
	pass = 'pass',
	running = 'running',
	pending = 'pending',
}

export type Component = {
	id: ComponentID,
	latest: SemVer,
}

export type Version = {
	id: SemVer,
	time: TimeStamp,
	tags?: string[],
	ciStatus: JobStatus
	testStatus: JobStatus
	message: string,
	contributors: AccountObj
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

export const versionExample = {
	id: '1.0.0',
	time: "2019-12-31 23:02:51.561Z",
	ciStatus: JobStatus.fail,
	testStatus: JobStatus.pass,
	message: 'bla bla bla',
	contributors: {name: 'oded', type: AccountTypes.user, profileImage: "https://bitsrc.imgix.net/11b8acfbc5f7a64c0ecec1e2a8d4b4866eaf4431.png?size=41&w=41&h=41&fill=fillmax&bg=fff"}
}