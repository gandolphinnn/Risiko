import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CONTINENTS } from 'src/app/services/core/data/continents';
import { TERRITORIES } from 'src/app/services/core/data/territories';
import { TerritoryId } from 'src/app/services/core/types';

const FILL_OPACITY          = '0.6';
const FILL_OPACITY_HOVER    = '0.8';
const FILL_OPACITY_SELECTED = '1';

@Component({
	selector:    'app-map',
	templateUrl: './map.component.html',
	styleUrl:    './map.component.scss',
	imports:     [],
})
export class MapComponent implements AfterViewInit {

	@ViewChild('container', { static: true }) private container!: ElementRef<HTMLDivElement>;

	private selectedId: TerritoryId | null = null;

	private readonly continentColor = new Map(
		CONTINENTS.map(c => [c.id, c.color])
	);

	ngAfterViewInit(): void {
		this.initSvg();
	}

	onSectorClicked(countryCode: TerritoryId): void {
		if (this.selectedId) {
			const prev = this.container.nativeElement.querySelector<SVGPathElement>(`#${this.selectedId}`);
			if (prev) prev.style.fillOpacity = FILL_OPACITY;
		}

		this.selectedId = countryCode;

		const path = this.container.nativeElement.querySelector<SVGPathElement>(`#${countryCode}`);
		if (path) path.style.fillOpacity = FILL_OPACITY_SELECTED;
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

			path.addEventListener('mouseenter', () => { if (territory.id !== this.selectedId) path.style.fillOpacity = FILL_OPACITY_HOVER; });
			path.addEventListener('mouseleave', () => { if (territory.id !== this.selectedId) path.style.fillOpacity = FILL_OPACITY; });
			path.addEventListener('click',      () => this.onSectorClicked(territory.id));
		}
	}
}
