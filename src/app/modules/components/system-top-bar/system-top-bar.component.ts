import { Component, Input } from '@angular/core';

@Component({
  selector: 'system-top-bar',
  templateUrl: 'system-top-bar.component.html',
  styleUrls: ['system-top-bar.component.css'],
})
export class SystemTopBarComponent {
  @Input() hasSearchBar: boolean = true;

  constructor() {}

  searchGame(): void {}
}
