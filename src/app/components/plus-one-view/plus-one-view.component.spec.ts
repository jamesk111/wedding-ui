import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlusOneViewComponent} from './plus-one-view.component';

describe('PlusOneViewComponent', () => {
	let component: PlusOneViewComponent;
	let fixture: ComponentFixture<PlusOneViewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PlusOneViewComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PlusOneViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
