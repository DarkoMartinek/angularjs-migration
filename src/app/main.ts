import 'angular';
import 'angular-animate';
import 'angular-auto-validate/dist/jcs-auto-validate';
import 'angular-ladda';
import 'angular-resource';
import 'angular-spinner';
import 'angular-strap';
import 'angular-ui-router';
import 'angularjs-toaster';
import 'ng-infinite-scroll';

import './app.main';
import './app.routes';
import './components';
import './filters';
import './services';

import './polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { Contact } from './services/contact.resource';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule,
    ],
    providers: [
        Contact,
    ],
})
export class AppModule {
    // override Angular bootstrap so it doesn't do anything
    public ngDoBootstrap(): void { }
}

// bootstrap using UpgradeModule
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((platformRef)  => {
        console.log('Bootstraping in Hybrid mode with Angular & AngularJS');
        const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.body, ['codecraft']);
    });
