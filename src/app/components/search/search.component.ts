import * as angular from 'angular';

import { Component, Inject } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

import { FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'search',
    template: `
    <form class="navbar-form navbar-left" [formGroup]="myForm">
    
        <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="Search name..." formControlName="search" />
        </div>
    
        <div class="form-group">
            <select class="form-control" formControlName="sorting">
                <option value="name">Name</option>
                <option value="email">Email</option>
            </select>
        </div>
    
        <div class="form-group">
            <select class="form-control" formControlName="ordering">
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
    </form>
    `
})
export class SearchComponent {
    protected myForm: FormGroup;

    constructor(
        @Inject(ContactService) private contacts: ContactService
    ) {
        this.myForm = new FormGroup({
            search: new FormControl(),
            sorting: new FormControl('name'),
            ordering: new FormControl('ASC'),
        })
    }
}

angular
    .module("codecraft")
    .directve('search', downgradeComponent({
        component: SearchComponent
    }));
