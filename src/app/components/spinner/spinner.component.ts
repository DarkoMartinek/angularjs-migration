// import * as angular from 'angular';

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
// import { downgradeComponent } from '@angular/upgrade/static';

import { Spinner } from 'spin.js';

@Component({
  selector: 'ccSpinner',
  template: `
    <div  [hidden]="!isLoading" class="spinner">
    <span #spinnerEl></span>

    <p>{{ message }}</p>
    </div>
  `,
})
export class SpinnerComponent implements AfterViewInit {
  @Input() public isLoading: boolean;
  @Input() public message: string;

  @ViewChild('spinnerEl')
  private spinnerEl: ElementRef;

  public ngAfterViewInit() {
    const spinner = new Spinner({
      length: 3,
      lines: 9,
      radius: 8,
      width: 5,
    });
    spinner.spin(this.spinnerEl.nativeElement);
  }
}

// angular
//   .module('codecraft')
//   .directive('ccSpinner', downgradeComponent({
//     component: SpinnerComponent,
//     inputs: ['isLoading', 'message'],
//   }));
