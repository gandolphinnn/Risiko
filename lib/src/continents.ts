import type { Continent } from './types';

export const CONTINENTS: Continent[] = [
	{
		id:          'north_america',
		name:        'North America',
		color:       '#ff6600',
		bonus:       5,
		territories: [
			'alaska', 'northwest_territory', 'alberta', 'ontario', 'quebec',
			'greenland', 'eastern_united_states', 'western_united_states', 'central_america',
		],
	},
	{
		id:          'south_america',
		name:        'South America',
		color:       '#00a2ff',
		bonus:       2,
		territories: ['venezuela', 'brazil', 'peru', 'argentina'],
	},
	{
		id:          'europe',
		name:        'Europe',
		color:       '#8900fa',
		bonus:       5,
		territories: [
			'iceland', 'great_britain', 'western_europe', 'northern_europe',
			'scandinavia', 'ukraine', 'southern_europe',
		],
	},
	{
		id:          'africa',
		name:        'Africa',
		color:       '#682b00',
		bonus:       3,
		territories: ['north_africa', 'egypt', 'east_africa', 'congo', 'south_africa', 'madagascar'],
	},
	{
		id:          'asia',
		name:        'Asia',
		color:       '#00be20',
		bonus:       7,
		territories: [
			'ural', 'siberia', 'yakursk', 'afghanistan', 'china', 'irkutsk',
			'mongolia', 'kamchatka', 'japan', 'middle_east', 'india', 'siam',
		],
	},
	{
		id:          'australia',
		name:        'Australia',
		color:       '#ff00c8',
		bonus:       2,
		territories: ['indonesia', 'new_guinea', 'western_australia', 'eastern_australia'],
	},
];
