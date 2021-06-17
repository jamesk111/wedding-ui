import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WeddingService} from '../../services/wedding.service';
import {GuestModel} from '../../models/guest.model';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {PlusOneViewComponent} from '../plus-one-view/plus-one-view.component';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {

	guestList: GuestModel[];
	invited: GuestModel[];
	ds: MatTableDataSource<GuestModel>;
	displayedColumns = ['name', 'address', 'phone', 'role', 'attending', 'p1s'];
	searchForm: FormGroup;
	adjustedGL: {
		guest: GuestModel,
		p1s: GuestModel[]
	}[];

	constructor(private weddingService: WeddingService, private formBuilder: FormBuilder, private dialog: MatDialog) {
	}

	ngOnInit(): void {
		this.getGuestList();
		this.searchForm = this.formBuilder.group({
			search: ['', Validators.compose([])]
		});
	}

	ngAfterViewInit(): void {
		this.searchForm?.get('search').valueChanges.subscribe(v => this.ds.filter = v);
	}

	getGuestList(): void {
		this.weddingService.getGuestList().subscribe(
			data => {
				this.guestList = data;
				this.invited = this.guestList.filter(x => !x.parentId);
				this.buildAdjustedGL();
			},
			err => console.error(err),
			() => this.ds = new MatTableDataSource(this.invited)
		);
	}

	getInvitedCount(): number {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return this.guestList.map(x => x.guestCount).reduce(reducer);
	}

	getAttendingCount(): number {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return this.guestList.map(x => x.attending ? x.guestCount : 0).reduce(reducer);
	}

	clearSearch(): void {
		this.searchForm.get('search').patchValue('');
	}

	buildAdjustedGL(): void {
		const agl: { guest: GuestModel, p1s: GuestModel[] }[] = [];
		const p1s: GuestModel[] = this.guestList.filter(x => !!x.parentId);

		this.invited.forEach(x => {
			agl.push({
				guest: x,
				p1s: p1s.filter(g => g.parentId === x.id)
			});
		});

		this.adjustedGL = agl;
	}

	openP1sView(guestData: { guest: GuestModel, p1s: GuestModel[] }): void {
		this.dialog.open(PlusOneViewComponent, {data: guestData.p1s});
	}

	getAg(id: number): { guest: GuestModel, p1s: GuestModel[] } {
		return this.adjustedGL.find(x => x.guest.id === id);
	}
}
