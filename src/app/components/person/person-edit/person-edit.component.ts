import * as angular from 'angular';

import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { ContactService } from '../../../services/contact.service';

import {
    UIRouterState,
    UIRouterStateParams,
} from '../../../ajs-upgraded-providers';

@Component({
    selector: 'personEdit',
    templateUrl: 'app/components/person/person-form.html',
})
export class PersonEditComponent {
    public person = {};
    public mode = 'Edit';

    constructor(
        @Inject(ContactService) public contacts: ContactService,
        @Inject(UIRouterState) public $state,
        @Inject(UIRouterStateParams) public $stateParams,
    ) {
        this.person = this.contacts.getPerson(this.$stateParams.email);
    }

    public save() {
        this.contacts.updateContact(this.person).then(() => {
            this.$state.go('list');
        });
    }

    public remove() {
        this.contacts.removeContact(this.person).then(() => {
            this.$state.go('list');
        });
    }
}

angular
    .module('codecraft')
    .directive('personEdit', downgradeComponent({
        component: PersonEditComponent,
    }));
