import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {NavComponent} from './components/nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {PartyComponent} from './components/party/party.component';
import {RegistryComponent} from './components/registry/registry.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {WeddingService} from './services/wedding.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './components/admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {CallbackComponent} from './components/callback/callback.component';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';
import {AdminGuard} from './auth/admin.guard';
import {PhotosComponent} from './components/photos/photos.component';
import {RsvpDialogComponent} from './components/rsvp-dialog/rsvp-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {FormFieldErrorComponent} from './components/form-field-error/form-field-error.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		NavComponent,
		PartyComponent,
		RegistryComponent,
		AdminComponent,
		LoginComponent,
		LogoutComponent,
		CallbackComponent,
		PhotosComponent,
		RsvpDialogComponent,
		FormFieldErrorComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		FontAwesomeModule,
		MatTableModule,
		MatDialogModule,
		AuthModule.forRoot({
			domain: `${environment.auth0Domain}`,
			clientId: `${environment.auth0Client}`,
			audience: `${environment.auth0Audience}`,
			redirectUri: window.location.origin,
			scope: 'openid profile email view:admin',
			httpInterceptor: {
				allowedList: [
					{
						uri: `${environment.apiUrl}` + '/wedding/guests/*',
						tokenOptions: {audience: `${environment.auth0Audience}`, scope: 'view:admin'}
					},
					{
						uri: `${environment.apiUrl}` + '/wedding/guests',
						tokenOptions: {audience: `${environment.auth0Audience}`, scope: 'view:admin'}
					},
					{
						uri: `${environment.apiUrl}` + '/wedding',
						tokenOptions: {audience: `${environment.auth0Audience}`, scope: 'view:admin'}
					},
				]
			}
		}),
		MatStepperModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDividerModule,
		MatRadioModule,
		MatCheckboxModule
	],
	providers: [
		WeddingService,
		AdminGuard,
		{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
