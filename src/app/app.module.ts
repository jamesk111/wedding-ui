import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PartyComponent } from './components/party/party.component';
import { RegistryComponent } from './components/registry/registry.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		NavComponent,
		PartyComponent,
		RegistryComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
