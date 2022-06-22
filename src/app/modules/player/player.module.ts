import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { SigningComponent } from './components/signing/signing.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayerDetailsComponent,
    PlayerListComponent,
    SigningComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[PlayerListComponent, PlayerDetailsComponent]
})
export class PlayerModule { }
