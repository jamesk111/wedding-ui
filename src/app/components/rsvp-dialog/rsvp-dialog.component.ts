import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {WeddingService} from '../../services/wedding.service';
import {GuestModel} from '../../models/guest.model';
import {MatStepper} from '@angular/material/stepper';
import {RsvpRequestModel} from '../../models/rsvp-request.model';
import {AdditionalGuestRequestModel} from '../../models/additional-guest-request.model';

@Component({
	selector: 'app-rsvp-dialog',
	templateUrl: './rsvp-dialog.component.html',
	styleUrls: ['./rsvp-dialog.component.scss']
})
export class RsvpDialogComponent implements OnInit {

	guest: GuestModel;
	fg1: FormGroup;
	fg2: FormGroup;
	fg3: FormGroup;
	deleted: Array<number>;

	@ViewChild('stepper', {static: true}) stepper: MatStepper;

	constructor(
		private dialogRef: MatDialogRef<RsvpDialogComponent>,
		private formBuilder: FormBuilder,
		private weddingService: WeddingService
	) {
	}

	ngOnInit(): void {
		this.guest = null;
		this.deleted = [];

		this.fg1 = this.formBuilder.group({
			inviteCode: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});

		this.fg2 = this.formBuilder.group({
			attending: ['', Validators.compose([Validators.required])]
		});

		this.fg3 = this.formBuilder.group({
			additionalGuests: this.formBuilder.array([])
		});

		const inviteCodeControl = this.fg1.get('inviteCode');
		inviteCodeControl.valueChanges.subscribe(() => {
			inviteCodeControl.patchValue(inviteCodeControl.value.toUpperCase(), {emitEvent: false});
		});
	}

	cancel(): void {
		const c = confirm('Any unsaved changes will be lost.');
		if (c === true) { this.dialogRef.close(); }
	}

	reset(): void {
		this.guest = null;
		this.stepper.reset();
		this.fg2.get('attending').setValue(false);
		this.fg3.reset();
		this.additionalGuests.reset();
	}

	findGuest(): void {
		const inviteCode = this.fg1.get('inviteCode').value;

		this.weddingService.getGuestByInviteCode(inviteCode).subscribe(
			data => {
				if (data === null) {
					alert('Invalid invite code.');
					return;
				}
				this.guest = data;
			},
			error => {
				error.statusCode === 404
					? alert('Invalid invite code.')
					: alert('An unexpected error occurred. Please try again later or call to RSVP.');
			},
			() => {
				if (inviteCode === this.guest.inviteCode) {
					this.getAdditionalGuestsList();
					this.stepper.next();
				} else {
					alert('An unexpected error occurred. Please try again later or call to RSVP.');
				}
			}
		);


	}

	rsvp(): void {
		const request: RsvpRequestModel = {
			id: this.guest.id,
			inviteCode: this.guest.inviteCode,
			attending: this.fg2.get('attending').value,
		};

		this.weddingService.rsvp(request).subscribe(
			() => {},
			() => {
				alert('An unexpected error occurred. Please try again later or call to RSVP.');
			},
			() => {
				this.guest.attending = request.attending;
				this.guest.attending ? this.stepper.next() : this.dialogRef.close();
			}
		);
	}

	getAdditionalGuestsList(): void {
		this.deleted = [];

		this.weddingService.getAdditionalGuests(this.guest.id).subscribe(
			data => {
				data.forEach(g => {
					const f = this.agForm;
					f.get('firstName').patchValue(g.firstName);
					f.get('lastName').patchValue(g.lastName);
					f.get('overThree').patchValue(g.ageOverThree);
					f.get('id').patchValue(g.id);
					this.additionalGuests.push(f);
				});
			},
			() => {
				alert('An unexpected error occurred. Please try again later or call to add additional guests.');
			}
		);
	}

	addAdditionalGuest(): void {
		if (this.additionalGuests.length < this.guest.allowedPlusOnes) {
			this.additionalGuests.push(this.agForm);
		} else {
			alert('Please call to add more than ' + this.guest.allowedPlusOnes + ' additional guest(s)!');
		}
	}

	deleteAdditionalGuest(index: number): void {
		this.deleted.push(this.additionalGuests.at(index).get('id').value);
		this.additionalGuests.removeAt(index);
	}

	saveAdditionalGuests(): void {
		const request: AdditionalGuestRequestModel = {
			parentId: this.guest.id,
			inviteCode: this.guest.inviteCode,
			guests: [],
			deleted: this.deleted
		};

		this.additionalGuests.controls.forEach(c => {
			const existing = c.get('id').value;
			const guest: GuestModel = {
				id: existing ?? null,
				firstName: c.get('firstName').value,
				lastName: c.get('lastName').value,
				address1: null,
				address2: null,
				city: null,
				state: null,
				zip: null,
				phone: null,
				email: null,
				guestRole: 'plusOne',
				reservedDate: null,
				attending: true,
				parentId: request.parentId,
				inviteCode: null,
				allowedPlusOnes: 0,
				ageOverThree: c.get('overThree').value,
				guestCount: 1
			};
			request.guests.push(guest);
		});

		this.weddingService.createAdditionalGuests(request).subscribe(
			() => this.dialogRef.close(),
			() => alert('An unexpected error occurred. Please try again later or call to add additional guests.')
		);
	}

	get additionalGuests(): FormArray {
		return this.fg3.controls.additionalGuests as FormArray;
	}

	get agForm(): FormGroup {
		return this.formBuilder.group({
			id: ['', Validators.compose([])],
			firstName: ['', Validators.compose([Validators.required])],
			lastName: ['', Validators.compose([Validators.required])],
			overThree: [false, Validators.compose([Validators.required])]
		});
	}
}
