import { Component, OnInit } from '@angular/core';
import {Meetup} from './meetup.model';
import {MeetupService} from './meetup.service';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
meetups:Meetup[]
  constructor(private meetupService:MeetupService) { }

  ngOnInit(): void {
  }

}
