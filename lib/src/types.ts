export type ContinentId =
	| 'north_america'
	| 'south_america'
	| 'europe'
	| 'africa'
	| 'asia'
	| 'australia';

export type TerritoryId =
	| 'alaska' | 'northwest_territory' | 'alberta' | 'ontario' | 'quebec'
	| 'greenland' | 'eastern_united_states' | 'western_united_states' | 'central_america'
	| 'venezuela' | 'brazil' | 'peru' | 'argentina'
	| 'iceland' | 'great_britain' | 'western_europe' | 'northern_europe'
	| 'scandinavia' | 'ukraine' | 'southern_europe'
	| 'north_africa' | 'egypt' | 'east_africa' | 'congo' | 'south_africa' | 'madagascar'
	| 'ural' | 'siberia' | 'yakursk' | 'afghanistan' | 'china' | 'irkutsk'
	| 'mongolia' | 'kamchatka' | 'japan' | 'middle_east' | 'india' | 'siam'
	| 'indonesia' | 'new_guinea' | 'western_australia' | 'eastern_australia';

export interface Territory {
	id:          TerritoryId;
	name:        string;
	continentId: ContinentId;
	adjacent:    TerritoryId[];
	label:       { x: number; y: number };
}

export interface Continent {
	id:          ContinentId;
	name:        string;
	color:       string;
	bonus:       number;
	territories: TerritoryId[];
}
