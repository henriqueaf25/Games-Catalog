import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LoaderFeedbackService } from '../shared/services/loader.service';

@Component({
  selector: 'loader-feedback',
  templateUrl: 'loader-feedback.component.html',
  styleUrls: ['loader-feedback.component.css'],
})
export class LoaderFeedbackComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  isLoading: boolean;
  constructor(
    private service: LoaderFeedbackService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.isLoading.subscribe((flag) => {
      this.isLoading = flag;
    });
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.service.isLoading.unsubscribe();
  }
}
