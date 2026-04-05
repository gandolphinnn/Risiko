import { TerritoryId } from '../types';

export enum ActorColor {
	Black  = 'black',
	Blue   = 'blue',
	Green  = 'green',
	Purple = 'purple',
	Red    = 'red',
	Yellow = 'yellow',
}

export class Actor {
	public uuid = crypto.randomUUID();
	public name: string;
	public color: ActorColor;
	public territories = new Map<TerritoryId, number>();
	public killedBy: Actor | null = null;

	public get continents() {
		const continents = new Set<string>();
		return continents;
	}

	constructor(name: string, color: ActorColor) {
		this.name = name;
		this.color = color;
	}
}
