import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

	constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) {
	}

	ngOnInit(): void {
	}

	logout(): void {
		// Call this to redirect the user to the login page
		this.auth.logout({ returnTo: this.doc.location.origin });
	}
}
