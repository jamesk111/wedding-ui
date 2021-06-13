import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
	selector: 'app-form-field-error',
	templateUrl: './form-field-error.component.html',
	styleUrls: ['./form-field-error.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormFieldErrorComponent {
	@Input() controlName: AbstractControl;

	errorMessage = {
		custom: (params) => `${params}`,
		minlength: (params) => `Minimum ${params.requiredLength} characters are required`,
		maxlength: (params) => `Maximum ${params.requiredLength} characters are allowed`,
		required: () => `This field is required`,
	};

	constructor() {
	}

	listErrors(): any[] {
		if (!this.controlName) { return []; }
		if (this.controlName.errors) {
			const errorMsgList = [];
			Object.keys(this.controlName.errors).map((error) => {
				const controlError = this.errorMessage[error](this.controlName.errors[error]);
				// tslint:disable-next-line:no-unused-expression
				this.controlName.touched || this.controlName.dirty ? errorMsgList.push(controlError) : '';
			});
			return errorMsgList;
		}
	}
}
