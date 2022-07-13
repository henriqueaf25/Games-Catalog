import { IBreadCrumbIndex } from '../../interfaces/breadcrumb.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbsService {
  applicationBaseUrl: string = '';
  breadCrumbsIndexes: IBreadCrumbIndex[] = [];
  constructor() {
    this.restore();
  }

  updateIndexes(obj: IBreadCrumbIndex): void {
    const duplicated = this.breadCrumbsIndexes.filter(
      (crumb) => crumb?.route === obj?.route
    );

    if (!duplicated?.length) {
      this.breadCrumbsIndexes.push(obj);
    } else {
      const index = this.breadCrumbsIndexes.findIndex((element) => {
        if (element?.route === obj?.route) {
          return true;
        }
        return false;
      });

      const newCrumbs: IBreadCrumbIndex[] = [];

      this.breadCrumbsIndexes.forEach((element, currIndex) => {
        if (currIndex <= index) {
          newCrumbs.push(element);
        }
      });

      this.breadCrumbsIndexes = newCrumbs;
    }

    sessionStorage.setItem(
      'bread_crumbs',
      JSON.stringify(this.breadCrumbsIndexes)
    );
    sessionStorage.setItem(
      'application_base_url',
      JSON.stringify(this.applicationBaseUrl)
    );
  }
  clearCrumbs(): void {
    this.breadCrumbsIndexes = [];
    sessionStorage.setItem(
      'bread_crumbs',
      JSON.stringify(this.breadCrumbsIndexes)
    );
    sessionStorage.setItem(
      'application_base_url',
      JSON.stringify(this.applicationBaseUrl)
    );
  }

  restore(): void {
    const breadCrumbsIndexes = sessionStorage.getItem('bread_crumbs');
    const applicationBaseUrl =
      sessionStorage.getItem('application_base_url') || '{}';

    if (breadCrumbsIndexes) {
      this.breadCrumbsIndexes = JSON.parse(breadCrumbsIndexes);
      this.applicationBaseUrl = JSON.parse(applicationBaseUrl);
    }
  }
}
