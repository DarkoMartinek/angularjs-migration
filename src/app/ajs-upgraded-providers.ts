import { InjectionToken } from '@angular/core';

export const Toaster = new InjectionToken('Toaster');
export function toasterServiceFactory(i: any) {
    return i.get('toaster');
}
export const toasterServiceProvider = {
    deps: ['$injector'],
    provide: Toaster,
    useFactory: toasterServiceFactory,
};

export const UIRouterState = new InjectionToken('UIRouterState');
export function uiRouterStateServiceFactory(i: any) {
    return i.get('$state');
}
export const uiRouterStateProvider = {
    deps: ['$injector'],
    provide: UIRouterState,
    useFactory: uiRouterStateServiceFactory,
};

export const UIRouterStateParams = new InjectionToken('UIRouterStateParams');
export function uiRouterStateParamsServiceFactory(i: any) {
    return i.get('$stateParams');
}
export const uiRouterStateParamsProvider = {
    deps: ['$injector'],
    provide: UIRouterStateParams,
    useFactory: uiRouterStateParamsServiceFactory,
};
