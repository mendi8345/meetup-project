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
  constructor(private router: Router, private meetupService: MeetupService) { }


  ngOnInit(): void {
    this.meetups=this.meetupService.meetups;
  }
  // onItemClick(meetup:Meetup){
  //   this.router.navigate([''])
  //
  // }

}
