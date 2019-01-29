import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'team', component: TeamComponent },
  { path: 'hallOfFame', component: HallOfFameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
