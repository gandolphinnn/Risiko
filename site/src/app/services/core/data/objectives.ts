import { ActorColor } from '../actor/actor';
import { Objective, ObjectiveType } from '../objective';


//TODO
export const OBJECTIVES: Objective[] = [
	{
		type: ObjectiveType.Expand,
		label: 'OBJECTIVE.EXPAND',
		condition: (actor) => actor.territories.size >= 24,
	},
	{
		type: ObjectiveType.Occupy,
		label: 'OBJECTIVE.OCCUPY',
		condition: (actor) => [...actor.territories.values()].filter(t => t >= 2).length >= 18,
	},
];
