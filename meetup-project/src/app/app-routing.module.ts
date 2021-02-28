import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetupDetailComponent} from './meetup/meetup-detail/meetup-detail.component';
import {MeetupComponent} from './meetup/meetup.component';

const routes: Routes = [
  {path: "", redirectTo: "/meetups", pathMatch: "full"},

  {
    path:"meetups",
    component:MeetupComponent
  },
  {
    path:'meetups/:id',
    component:MeetupDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
