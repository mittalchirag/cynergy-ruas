import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: '', component: HomeComponent },
  { path: 'hallOfFame', component: HallOfFameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
