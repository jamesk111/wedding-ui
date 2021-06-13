import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { GuestModel } from '../models/guest.model';
import {RsvpRequestModel} from '../models/rsvp-request.model';
import {AdditionalGuestRequestModel} from '../models/additional-guest-request.model';

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
		return this.http.post(environment.apiUrl + '/wedding', body, httpOptions);
	}

	createAdditionalGuests(request: AdditionalGuestRequestModel): Observable<any> {
		const body = JSON.stringify(request);
		return this.http.post(environment.apiUrl + '/wedding/guests/additional', body, httpOptions);
	}

	getGuestList(): Observable<any> {
		return this.http.get<Array<GuestModel>>(environment.apiUrl + '/wedding/guests');
	}

	getAdditionalGuests(id): Observable<GuestModel[]> {
		console.log('service::: ' + id);
		return this.http.get<GuestModel[]>(environment.apiUrl + '/wedding/guests/additional/' + id);
	}

	// getGuest(id: number): Observable<GuestModel> {
	// 	return this.http.get<GuestModel>(environment.apiUrl + '/wedding/guests/' + id);
	// }

	getGuestByInviteCode(inviteCode: string): Observable<GuestModel> {
		return this.http.get<GuestModel>(environment.apiUrl + '/wedding/invite/' + inviteCode);
	}

	// deleteGuest(id: number): Observable<any> {
	// 	return this.http.delete(environment.apiUrl + '/wedding/guests' + id);
	// }

	rsvp(request: RsvpRequestModel): Observable<any> {
		const body = JSON.stringify(request);
		return this.http.post(environment.apiUrl + '/wedding/rsvp', body, httpOptions);
	}
}
