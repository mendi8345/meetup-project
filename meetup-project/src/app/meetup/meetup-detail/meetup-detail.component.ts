import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Meetup} from '../meetup.model';
import {MeetupService} from '../meetup.service';

@Component({
  selector: 'app-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
id
meetup:Meetup
  constructor(private route:ActivatedRoute,private meetupService:MeetupService) { }

 ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id=+params['id'];
          this.meetup=this.meetupService.getMeetup(this.id);
        }
      );
  }

}
