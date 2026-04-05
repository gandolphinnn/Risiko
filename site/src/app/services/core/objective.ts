import { Actor } from './actor/actor';

export enum ObjectiveType {
	Kill,
	Expand,
	Occupy,
	Continents,
}

export type Objective = {
	type: ObjectiveType;
	label: string;
	condition: (actor: Actor) => boolean;
}
