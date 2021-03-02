import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetupDetailComponent} from './meetup/meetup-detail/meetup-detail.component';
import {MeetupComponent} from './meetup/meetup.component';
import { MeetupResolverService } from './meetup/meetup-resolver.service';

const routes: Routes = [
  {path: "", redirectTo: "/meetups", pathMatch: "full"},

  {
    path:"meetups",
    component:MeetupComponent,
    resolve: [MeetupResolverService],
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
