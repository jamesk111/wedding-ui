import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {PartyComponent} from './components/party/party.component';
import {RegistryComponent} from './components/registry/registry.component';

const routes: Routes = [
	{path: 'details', component: LandingComponent},
	{path: 'party', component: PartyComponent},
	{path: 'registry', component: RegistryComponent},
	{path: '**', redirectTo: 'details'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
