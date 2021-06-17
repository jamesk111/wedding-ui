import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {GuestModel} from '../../models/guest.model';

@Component({
	selector: 'app-plus-one-view',
	templateUrl: './plus-one-view.component.html',
	styleUrls: ['./plus-one-view.component.scss']
})
export class PlusOneViewComponent implements OnInit {

	constructor(@Inject(MAT_DIALOG_DATA) public data: GuestModel[]) {
	}

	ngOnInit(): void {
	}

}
