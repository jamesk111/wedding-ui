import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PartyComponent } from './components/party/party.component';
import { RegistryComponent } from './components/registry/registry.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'party', component: PartyComponent },
	{ path: 'registry', component: RegistryComponent },
	{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
