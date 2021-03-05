import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { GuestModel } from '../models/guest.model';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class WeddingService {

	constructor(private http: HttpClient) { }

	createGuest(guest: GuestModel): Observable<any> {
		const body = JSON.stringify(guest);
		return this.http.post(environment.apiUrl + 'wedding', body, httpOptions);
	}

	getGuestList(): Observable<GuestModel[]> {
		return this.http.get<GuestModel[]>(environment.apiUrl + 'wedding/guests');
	}

	getGuest(id: number): Observable<GuestModel> {
		return this.http.get<GuestModel>(environment.apiUrl + 'wedding/guests/' + id);
	}

	deleteGuest(id: number): Observable<any> {
		return this.http.delete(environment.apiUrl + 'wedding/guests' + id);
	}

	// return this.http.get<GuestModel[]>(environment.apiUrl + 'wedding/guests',
// { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
// );
}
