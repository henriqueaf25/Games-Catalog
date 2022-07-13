import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreadCrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'breadcrumbs-component',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
  constructor(
    public breadcrumbsService: BreadCrumbsService,
    public route: Router
  ) {}
}
