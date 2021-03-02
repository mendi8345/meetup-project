import {DatePipe} from '@angular/common';
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
date:string
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    console.log()
    this.date=this.datePipe.transform(this.meetup.date,"yyyy-MM-dd")
  }

}
