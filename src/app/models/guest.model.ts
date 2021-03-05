export interface GuestModel {
	id: number;
	firstName: string;
	lastName: string;
	address1: string;
	address2: string;
	city: string;
	state: string;
	zip: number;
	phone: string;
	email: string;
	guestRole: string;
	reservedDate: Date;
	attending: boolean;
}
