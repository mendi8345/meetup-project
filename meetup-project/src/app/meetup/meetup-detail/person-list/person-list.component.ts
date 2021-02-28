import {Input} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Person} from '../../person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
@Input()persons:Person[]
  constructor() { }

  ngOnInit(): void {
  }

}
