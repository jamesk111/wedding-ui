import { Component, OnInit } from '@angular/core';
import { WeddingService } from '../../services/wedding.service';
import { GuestModel } from '../../models/guest.model';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	public guestList: GuestModel[];
	displayedColumns = ['name', 'address', 'phone', 'email', 'role', 'attending', 'parentId', 'guests'];

	constructor(private weddingService: WeddingService) {
	}

	ngOnInit(): void {
		this.getGuestList();
	}

	getGuestList(): void {
		this.weddingService.getGuestList().subscribe(
			data => {
				this.guestList = data;
			},
			err => console.error(err),
			() => console.log('Guest List Loaded')
		);
	}

	getInvitedCount(): number {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return this.guestList.map(x => x.guestCount).reduce(reducer);
	}

}
