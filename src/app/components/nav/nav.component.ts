import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	isAdmin = false;

	constructor(public auth: AuthService) {
	}

	ngOnInit(): void {
		this.auth.user$.subscribe(user => this.isAdmin = user && user
			.hasOwnProperty('https://falk-kline.com/roles') && user['https://falk-kline.com/roles'].includes('admin'));
	}
}
