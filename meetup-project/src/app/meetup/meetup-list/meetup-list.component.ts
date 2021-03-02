import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Meetup} from '../meetup.model';
import {MeetupService} from '../meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent implements OnInit {
  meetups: Meetup[]
  isEmpty=false
  subscription
  constructor(private router: Router, private meetupService: MeetupService) { }


  ngOnInit(): void {
    this.subscription=this.meetupService.meetupsChanged
      .subscribe(
        (meetups: Meetup[]) => {
          this.meetups=meetups;
          if (meetups.length==0)
            this.isEmpty=true
          else
          this.isEmpty=false

        }
      );
    this.meetups=this.meetupService.getmeetups();
    console.log(this.meetups)
    this.isEmpty=false
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
