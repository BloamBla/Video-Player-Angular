import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { AddingComponent } from './adding/adding.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
  },
  {
    path: 'adding',
    component: AddingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
