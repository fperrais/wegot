interface ITimeline {
	title: string,
	start: string,
	end: string,
	details: string[],
	path: string,
	icons: IIcons[],
}

export interface IIcons {
	path: string,
	label: string,
}

export interface ISkills {
	name: string,
	icons: IIcons[],
}

export interface IContent {
	formations: ITimeline[],
	experiences: ITimeline[],
	skills: ISkills[],
}
