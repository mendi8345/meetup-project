import { Component, Input, OnInit } from '@angular/core';
import {Meetup} from '../../meetup.model';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.css']
})
export class MeetupItemComponent implements OnInit {
@Input()meetup:Meetup
@Input()index:Number
  constructor() { }

  ngOnInit(): void {
  }

}
