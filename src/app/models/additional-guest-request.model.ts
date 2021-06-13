import {GuestModel} from './guest.model';

export interface AdditionalGuestRequestModel {
	parentId: number;
	inviteCode: string;
	guests: Array<GuestModel>;
	deleted: Array<number>;
}
