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

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { Contact } from './services/contact.resource';
import { ContactService } from './services/contact.service';
import { toasterServiceProvider } from './ajs-upgraded-providers';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchComponent,
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        Contact,
        ContactService,
        toasterServiceProvider,
    ],
    entryComponents: [
        SearchComponent,
    ]
})
export class AppModule {
    // override Angular bootstrap so it doesn't do anything
    public ngDoBootstrap(): void { }
}

// bootstrap using UpgradeModule
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((platformRef) => {
        console.log('Bootstraping in Hybrid mode with Angular & AngularJS');
        const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.body, ['codecraft']);
    });
