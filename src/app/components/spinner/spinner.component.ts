import * as angular from 'angular';

let spinnerComponent = {
  selector: 'ccSpinner',
  template: `
    <div class="spinner"
      ng-show="$ctrl.isLoading">
    <span us-spinner="{radius:8, width:5, length: 3, lines:9}"></span>

    <p>{{ $ctrl.message }}</p>
    </div>
  `,
  bindings: {
    isLoading: "=",
    message: "@"
  },
  controller: class SpinnerController {
    public isLoading;
    public message;

    constructor() {}
  }
}

angular
  .module("codecraft")
  .component(spinnerComponent.selector, spinnerComponent);
  