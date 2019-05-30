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
import './pipes';
import './services';

import './polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { LaddaModule } from 'angular2-ladda';

import { CardComponent } from './components/card/card.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { SearchComponent } from './components/search/search.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { Contact } from './services/contact.resource';
import { ContactService } from './services/contact.service';

import {
    toasterServiceProvider,
    uiRouterStateParamsProvider,
    uiRouterStateProvider,
} from './ajs-upgraded-providers';

@NgModule({
    declarations: [
        SearchComponent,
        CardComponent,
        DefaultImagePipe,
        CardComponent,
        SpinnerComponent,
        PersonListComponent,
        PersonCreateComponent,
        PersonEditComponent,
    ],
    entryComponents: [
        SearchComponent,
        // CardComponent,
        // SpinnerComponent,
        PersonListComponent,
        PersonCreateComponent,
        PersonEditComponent,
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        LaddaModule,
        InfiniteScrollModule,
    ],
    providers: [
        Contact,
        ContactService,
        toasterServiceProvider,
        uiRouterStateProvider,
        uiRouterStateParamsProvider,
    ],
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
