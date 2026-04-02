import { Component, ElementRef, OnInit, ViewChild, output, inject, viewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONTINENTS, TERRITORIES } from '@risiko/lib';
import type { TerritoryId } from '@risiko/lib';

const FILL_OPACITY         = '0.55';
const FILL_OPACITY_HOVER   = '0.85';
const FILL_OPACITY_SELECTED = '1';

@Component({
	selector:    'app-map',
	templateUrl: './map.component.html',
	styleUrl:    './map.component.scss',
	imports:     [],
})
export class MapComponent implements OnInit {

	@ViewChild('container', { static: true }) private container!: ElementRef<HTMLDivElement>;

	territoryClick = output<TerritoryId>();

	private http            = inject(HttpClient);
	private selectedId: TerritoryId | null = null;

	private readonly continentColor = new Map(
		CONTINENTS.map(c => [c.id, c.color])
	);
	private readonly territoryContinent = new Map(
		TERRITORIES.map(t => [t.id, t.continentId])
	);

	ngOnInit(): void {
		this.http.get('/Risk_board.svg', { responseType: 'text' }).subscribe(svg => {
			this.container.nativeElement.innerHTML = svg;
			this.initSvg();
		});
	}

	private initSvg(): void {
		const svg = this.container.nativeElement.querySelector('svg');
		if (!svg) return;

		svg.setAttribute('viewBox', '0 0 749.81909 519.06781');
		svg.removeAttribute('width');
		svg.removeAttribute('height');

		for (const territory of TERRITORIES) {
			const path = this.container.nativeElement.querySelector<SVGPathElement>(`#${territory.id}`);
			if (!path) continue;

			const color = this.continentColor.get(territory.continentId)!;
			path.style.fill        = color;
			path.style.fillOpacity = FILL_OPACITY;
			path.style.cursor      = 'pointer';
			path.style.transition  = 'fill-opacity 0.15s';

			path.addEventListener('mouseenter', () => {
				if (territory.id !== this.selectedId)
					path.style.fillOpacity = FILL_OPACITY_HOVER;
			});
			path.addEventListener('mouseleave', () => {
				if (territory.id !== this.selectedId)
					path.style.fillOpacity = FILL_OPACITY;
			});
			path.addEventListener('click', () => this.onTerritoryClick(territory.id, path));
		}
	}

	private onTerritoryClick(id: TerritoryId, path: SVGPathElement): void {
		if (this.selectedId) {
			const prev = this.container.nativeElement.querySelector<SVGPathElement>(`#${this.selectedId}`);
			if (prev) prev.style.fillOpacity = FILL_OPACITY;
		}

		this.selectedId            = id;
		path.style.fillOpacity     = FILL_OPACITY_SELECTED;
		this.territoryClick.emit(id);
	}
}
