import type { Continent } from './types';

export const CONTINENTS: Continent[] = [
	{
		id:          'north_america',
		name:        'North America',
		color:       '#3b82f6',
		bonus:       5,
		territories: [
			'alaska', 'northwest_territory', 'alberta', 'ontario', 'quebec',
			'greenland', 'eastern_united_states', 'western_united_states', 'central_america',
		],
	},
	{
		id:          'south_america',
		name:        'South America',
		color:       '#22c55e',
		bonus:       2,
		territories: ['venezuela', 'brazil', 'peru', 'argentina'],
	},
	{
		id:          'europe',
		name:        'Europe',
		color:       '#8b5cf6',
		bonus:       5,
		territories: [
			'iceland', 'great_britain', 'western_europe', 'northern_europe',
			'scandinavia', 'ukraine', 'southern_europe',
		],
	},
	{
		id:          'africa',
		name:        'Africa',
		color:       '#f97316',
		bonus:       3,
		territories: ['north_africa', 'egypt', 'east_africa', 'congo', 'south_africa', 'madagascar'],
	},
	{
		id:          'asia',
		name:        'Asia',
		color:       '#ef4444',
		bonus:       7,
		territories: [
			'ural', 'siberia', 'yakursk', 'afghanistan', 'china', 'irkutsk',
			'mongolia', 'kamchatka', 'japan', 'middle_east', 'india', 'siam',
		],
	},
	{
		id:          'australia',
		name:        'Australia',
		color:       '#eab308',
		bonus:       2,
		territories: ['indonesia', 'new_guinea', 'western_australia', 'eastern_australia'],
	},
];
