import { Actor, ActorColor } from './actor';

export class Player extends Actor {
	constructor(name: string, color: ActorColor) {
		super(name, color);
	}
}
