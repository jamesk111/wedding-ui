import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {

	isAdmin: boolean;

	constructor(private auth: AuthService, private router: Router) {
		this.auth.user$.subscribe(user => this.isAdmin = user && user
			.hasOwnProperty('https://falk-kline.com/roles') && user['https://falk-kline.com/roles'].includes('admin'));
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.isAdmin) {
			return true;
		} else {
			this.router.navigate(['/']);
			return false;
		}
	}

}
