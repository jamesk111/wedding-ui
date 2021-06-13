import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RsvpDialogComponent} from '../rsvp-dialog/rsvp-dialog.component';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	constructor(public dialog: MatDialog) {
	}

	ngOnInit(): void {
	}

	rsvp(): void {
		this.dialog.open(RsvpDialogComponent, {maxHeight: '75vh', minWidth: '288px'});
	}

}
