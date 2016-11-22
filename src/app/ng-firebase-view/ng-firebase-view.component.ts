import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgFirebaseViewService } from '../ng-firebase-view.service';

import { Map, List } from 'immutable';
@Component({
    selector: 'ng-firebase-view',
    templateUrl: './ng-firebase-view.component.html',
    styleUrls: ['./ng-firebase-view.component.scss']
})
export class NgFirebaseViewComponent implements OnInit {
    public isDataVisible = true;
    public isChangelogVisible = false;

    public dataTree: Map<any, any> = null;
    public changelog: List<any> = null;

    constructor(
        private ngFVS: NgFirebaseViewService
    ) {
        this.dataTree = ngFVS.dataTree;
        this.ngFVS.dataTreeListener.subscribe(data => {
            this.dataTree = data;
        });

        this.changelog = ngFVS.changelog;
        this.ngFVS.changelogListener.subscribe(data => {
            this.changelog = data;
            // console.log(this.changelog.toJS());
        });
    }


    ngOnInit() {
    }

    showData() {
        this.isDataVisible = true;
        this.isChangelogVisible = false;
    }

    showChangelog() {
        this.isDataVisible = false;
        this.isChangelogVisible = true;
    }

    isActiveButton(buttonType) {
        if(buttonType == 'data' && this.isDataVisible) return 'primary'
        if(buttonType == 'changelog' && this.isChangelogVisible) return 'primary'
    }

}
