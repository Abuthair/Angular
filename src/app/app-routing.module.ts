import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsoonComponent } from './components/contactsoon/contactsoon.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { AuthserviceService } from './modules/auth/service/authservice.service';
import { PlayerDetailsComponent } from './modules/player/components/player-details/player-details.component';
import { PlayerListComponent } from './modules/player/components/player-list/player-list.component';
import { ShowSigningComponent } from './modules/player/components/show-signing/show-signing.component';
import { SigningComponent } from './modules/player/components/signing/signing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'player-list',
    component: PlayerListComponent,
    canActivate: [AuthserviceService],
  },
  { path: 'player-list/:type', component: PlayerListComponent },
  { path: 'player-details/:id', component: PlayerDetailsComponent },
  { path: 'signing/:id', component: SigningComponent },

  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: 'contactus', component: ContactusComponent }],
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  { path: 'contactsoon', component: ContactsoonComponent },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
