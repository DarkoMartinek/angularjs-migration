import * as angular from 'angular';

import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { ContactService } from '../../services/contact.service';

import { UIRouterState } from '../../ajs-upgraded-providers';

@Component({
    selector: 'personCreate',
    templateUrl: 'app/components/person-create/person-form.html',
})
export class PersonCreateComponent {
    public person = {};

    constructor(
        @Inject(ContactService) public contacts: ContactService,
        @Inject(UIRouterState) public $state,
    ) { }

    public save() {
        console.log('createContact');
        this.contacts.createContact(this.person).then(() => {
            this.$state.go('list');
        });
    }
}

angular
    .module('codecraft')
    .directive('personCreate', downgradeComponent({
        component: PersonCreateComponent,
    }));
