import { Injectable } from '@angular/core';
import { Player } from './core/actor/player';
import { Bot } from './core/actor/bot';
import { Actor, ActorColor } from './core/actor/actor';

export enum GamePhase {
	Setup,
	Play,
	Finished,
}

export enum TurnPhase {
	Reinforcement,
	Attack,
	Fortify,
}

export interface GameSettings {
	botsAmount: number;
}

@Injectable({
	providedIn: 'root',
})
export class GameService {
	public phase = GamePhase.Finished;

	public players = new Set<Player>();
	public bots = new Set<Bot>();
	public actors = new Map<ActorColor, Actor>();

	public start(players: Player[], settings: GameSettings) {
		this.players = new Set(players);
		const playerColors = players.map(p => p.color);
		const botColors = Object.values(ActorColor).filter(c => !playerColors.includes(c));
		this.bots = new Set(
			new Array(settings.botsAmount)
			.fill(null)
			.map((_, i) => new Bot(`Bot ${i + 1}`, botColors[i]!))
		);

		this.phase = GamePhase.Play;
	}
}
