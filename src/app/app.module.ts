import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PartyComponent } from './components/party/party.component';
import { RegistryComponent } from './components/registry/registry.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeddingService } from './services/wedding.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

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
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		FontAwesomeModule,
		MatTableModule,
		AuthModule.forRoot({
			domain: 'dev-m231um59.auth0.com',
			clientId: '39IUjay81SR6fCykJCiAgWyQRyIkxYTO',
			audience: 'https://falk-kline.com/api',
			redirectUri: window.location.origin,
			httpInterceptor: {
				allowedList: [
					{
						uri: `${ environment.apiUrl }wedding/*`,
						tokenOptions: { audience: 'https://dev-m231um59.auth0.com/api/v2/', scope: 'view:admin' }
					}
				]
			}
		})
	],
	providers: [
		WeddingService,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
