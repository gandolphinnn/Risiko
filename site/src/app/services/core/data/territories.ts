import type { Territory } from '../types';

export const TERRITORIES: Territory[] = [

	// ── North America ──────────────────────────────────────────────────────────

	{
		id:          'alaska',
		name:        'Alaska',
		continentId: 'north_america',
		adjacent:    ['alberta', 'northwest_territory', 'kamchatka'],
		label:       { x: 53, y: 94 },
	},
	{
		id:          'northwest_territory',
		name:        'Northwest Territory',
		continentId: 'north_america',
		adjacent:    ['alaska', 'alberta', 'ontario', 'greenland'],
		label:       { x: 159, y: 69 },
	},
	{
		id:          'alberta',
		name:        'Alberta',
		continentId: 'north_america',
		adjacent:    ['alaska', 'northwest_territory', 'ontario', 'western_united_states'],
		label:       { x: 93, y: 120 },
	},
	{
		id:          'ontario',
		name:        'Ontario',
		continentId: 'north_america',
		adjacent:    ['northwest_territory', 'alberta', 'greenland', 'quebec', 'eastern_united_states', 'western_united_states'],
		label:       { x: 181, y: 144 },
	},
	{
		id:          'quebec',
		name:        'Quebec',
		continentId: 'north_america',
		adjacent:    ['greenland', 'ontario', 'eastern_united_states'],
		label:       { x: 220, y: 134 },
	},
	{
		id:          'greenland',
		name:        'Greenland',
		continentId: 'north_america',
		adjacent:    ['northwest_territory', 'ontario', 'quebec', 'iceland'],
		label:       { x: 261, y: 58 },
	},
	{
		id:          'eastern_united_states',
		name:        'Eastern United States',
		continentId: 'north_america',
		adjacent:    ['quebec', 'ontario', 'western_united_states', 'central_america'],
		label:       { x: 182, y: 188 },
	},
	{
		id:          'western_united_states',
		name:        'Western United States',
		continentId: 'north_america',
		adjacent:    ['alberta', 'ontario', 'eastern_united_states', 'central_america'],
		label:       { x: 120, y: 188 },
	},
	{
		id:          'central_america',
		name:        'Central America',
		continentId: 'north_america',
		adjacent:    ['western_united_states', 'eastern_united_states', 'venezuela'],
		label:       { x: 136, y: 247 },
	},

	// ── South America ──────────────────────────────────────────────────────────

	{
		id:          'venezuela',
		name:        'Venezuela',
		continentId: 'south_america',
		adjacent:    ['central_america', 'brazil', 'peru'],
		label:       { x: 189, y: 284 },
	},
	{
		id:          'brazil',
		name:        'Brazil',
		continentId: 'south_america',
		adjacent:    ['venezuela', 'peru', 'argentina', 'north_africa'],
		label:       { x: 227, y: 334 },
	},
	{
		id:          'peru',
		name:        'Peru',
		continentId: 'south_america',
		adjacent:    ['venezuela', 'brazil', 'argentina'],
		label:       { x: 183, y: 342 },
	},
	{
		id:          'argentina',
		name:        'Argentina',
		continentId: 'south_america',
		adjacent:    ['brazil', 'peru'],
		label:       { x: 197, y: 425 },
	},

	// ── Europe ─────────────────────────────────────────────────────────────────

	{
		id:          'iceland',
		name:        'Iceland',
		continentId: 'europe',
		adjacent:    ['greenland', 'great_britain', 'scandinavia'],
		label:       { x: 321, y: 103 },
	},
	{
		id:          'great_britain',
		name:        'Great Britain',
		continentId: 'europe',
		adjacent:    ['iceland', 'northern_europe', 'scandinavia', 'western_europe'],
		label:       { x: 306, y: 161 },
	},
	{
		id:          'western_europe',
		name:        'Western Europe',
		continentId: 'europe',
		adjacent:    ['great_britain', 'northern_europe', 'southern_europe', 'north_africa'],
		label:       { x: 326, y: 223 },
	},
	{
		id:          'northern_europe',
		name:        'Northern Europe',
		continentId: 'europe',
		adjacent:    ['great_britain', 'scandinavia', 'ukraine', 'southern_europe', 'western_europe'],
		label:       { x: 373, y: 169 },
	},
	{
		id:          'scandinavia',
		name:        'Scandinavia',
		continentId: 'europe',
		adjacent:    ['iceland', 'great_britain', 'northern_europe', 'ukraine'],
		label:       { x: 383, y: 106 },
	},
	{
		id:          'ukraine',
		name:        'Ukraine',
		continentId: 'europe',
		adjacent:    ['scandinavia', 'northern_europe', 'southern_europe', 'afghanistan', 'middle_east', 'ural'],
		label:       { x: 441, y: 149 },
	},
	{
		id:          'southern_europe',
		name:        'Southern Europe',
		continentId: 'europe',
		adjacent:    ['western_europe', 'northern_europe', 'ukraine', 'middle_east', 'egypt', 'north_africa'],
		label:       { x: 382, y: 223 },
	},

	// ── Africa ─────────────────────────────────────────────────────────────────

	{
		id:          'north_africa',
		name:        'North Africa',
		continentId: 'africa',
		adjacent:    ['western_europe', 'southern_europe', 'brazil', 'egypt', 'east_africa', 'congo'],
		label:       { x: 361, y: 310 },
	},
	{
		id:          'egypt',
		name:        'Egypt',
		continentId: 'africa',
		adjacent:    ['southern_europe', 'middle_east', 'east_africa', 'north_africa'],
		label:       { x: 401, y: 287 },
	},
	{
		id:          'east_africa',
		name:        'East Africa',
		continentId: 'africa',
		adjacent:    ['egypt', 'north_africa', 'congo', 'south_africa', 'madagascar', 'middle_east'],
		label:       { x: 437, y: 359 },
	},
	{
		id:          'congo',
		name:        'Congo',
		continentId: 'africa',
		adjacent:    ['north_africa', 'east_africa', 'south_africa'],
		label:       { x: 405, y: 373 },
	},
	{
		id:          'south_africa',
		name:        'South Africa',
		continentId: 'africa',
		adjacent:    ['congo', 'east_africa', 'madagascar'],
		label:       { x: 414, y: 429 },
	},
	{
		id:          'madagascar',
		name:        'Madagascar',
		continentId: 'africa',
		adjacent:    ['south_africa', 'east_africa'],
		label:       { x: 478, y: 434 },
	},

	// ── Asia ───────────────────────────────────────────────────────────────────

	{
		id:          'ural',
		name:        'Ural',
		continentId: 'asia',
		adjacent:    ['ukraine', 'afghanistan', 'china', 'siberia'],
		label:       { x: 518, y: 118 },
	},
	{
		id:          'siberia',
		name:        'Siberia',
		continentId: 'asia',
		adjacent:    ['ural', 'china', 'mongolia', 'irkutsk', 'yakursk'],
		label:       { x: 550, y: 93 },
	},
	{
		id:          'yakursk',
		name:        'Yakutsk',
		continentId: 'asia',
		adjacent:    ['siberia', 'irkutsk', 'kamchatka'],
		label:       { x: 611, y: 66 },
	},
	{
		id:          'afghanistan',
		name:        'Afghanistan',
		continentId: 'asia',
		adjacent:    ['ukraine', 'ural', 'china', 'middle_east', 'india'],
		label:       { x: 498, y: 188 },
	},
	{
		id:          'china',
		name:        'China',
		continentId: 'asia',
		adjacent:    ['afghanistan', 'ural', 'siberia', 'mongolia', 'siam', 'india'],
		label:       { x: 587, y: 219 },
	},
	{
		id:          'irkutsk',
		name:        'Irkutsk',
		continentId: 'asia',
		adjacent:    ['siberia', 'yakursk', 'kamchatka', 'mongolia'],
		label:       { x: 606, y: 140 },
	},
	{
		id:          'mongolia',
		name:        'Mongolia',
		continentId: 'asia',
		adjacent:    ['siberia', 'china', 'irkutsk', 'kamchatka', 'japan'],
		label:       { x: 615, y: 175 },
	},
	{
		id:          'kamchatka',
		name:        'Kamchatka',
		continentId: 'asia',
		adjacent:    ['yakursk', 'irkutsk', 'mongolia', 'japan', 'alaska'],
		label:       { x: 659, y: 100 },
	},
	{
		id:          'japan',
		name:        'Japan',
		continentId: 'asia',
		adjacent:    ['kamchatka', 'mongolia'],
		label:       { x: 680, y: 178 },
	},
	{
		id:          'middle_east',
		name:        'Middle East',
		continentId: 'asia',
		adjacent:    ['ukraine', 'afghanistan', 'india', 'southern_europe', 'egypt', 'east_africa'],
		label:       { x: 467, y: 258 },
	},
	{
		id:          'india',
		name:        'India',
		continentId: 'asia',
		adjacent:    ['middle_east', 'afghanistan', 'china', 'siam'],
		label:       { x: 543, y: 267 },
	},
	{
		id:          'siam',
		name:        'Siam',
		continentId: 'asia',
		adjacent:    ['india', 'china', 'indonesia'],
		label:       { x: 605, y: 284 },
	},

	// ── Australia ──────────────────────────────────────────────────────────────

	{
		id:          'indonesia',
		name:        'Indonesia',
		continentId: 'australia',
		adjacent:    ['siam', 'new_guinea', 'western_australia'],
		label:       { x: 617, y: 369 },
	},
	{
		id:          'new_guinea',
		name:        'New Guinea',
		continentId: 'australia',
		adjacent:    ['indonesia', 'western_australia', 'eastern_australia'],
		label:       { x: 676, y: 347 },
	},
	{
		id:          'western_australia',
		name:        'Western Australia',
		continentId: 'australia',
		adjacent:    ['indonesia', 'new_guinea', 'eastern_australia'],
		label:       { x: 651, y: 445 },
	},
	{
		id:          'eastern_australia',
		name:        'Eastern Australia',
		continentId: 'australia',
		adjacent:    ['new_guinea', 'western_australia'],
		label:       { x: 706, y: 423 },
	},
];
