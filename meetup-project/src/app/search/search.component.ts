import {stringify} from '@angular/compiler/src/util';
import {Component, HostListener, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Meetup} from '../meetup/meetup.model';
import {MeetupService} from '../meetup/meetup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  startDate='';
  endDate='';

  meetupForm: FormGroup;
  calanderMode=false
  City: any=['ירושלים', 'תל אביב', 'פתח תקווה', 'חיפה', 'טבריה', 'רמת גן']
  constructor(private meetupService: MeetupService) { }

  ngOnInit(): void {
    this.initForm()
  }
  private initForm() {
    let name='';
  let location='בחירת איזור';

    this.meetupForm=new FormGroup({
      name: new FormControl(name, Validators.maxLength(10)),
      startDate: new FormControl(this.startDate),
      endDate: new FormControl(this.endDate),
      location: new FormControl(location)
    });
  }
  get name() {return this.meetupForm.get('name');}

  /*
   filter from client side while typing....
   */
  filterMeetups() {
    let allMeetups: Meetup[]
    this.meetupService.FatchMeetups().subscribe(
      date => {
        allMeetups=date
        let filterdMeetups: Meetup[]=[]
        for (let index=0; index<allMeetups.length; index++) {
          if (this.isMatch(allMeetups[index])) {
            filterdMeetups.push(allMeetups[index])
          }
        }
        this.meetupService.setmeetups(filterdMeetups)
      }
    )
  }
  /*
  filter from serverSide between dates
 */
  onSubmit() {
    let filterdMeetups: Meetup[]=[]
    this.meetupService.FatchMeetupsBetweenDates(this.startDate, this.endDate).subscribe(
      data => {
        for (let index=0; index<data.length; index++) {
          if (this.isMatch(data[index])) {
            filterdMeetups.push(data[index])
          }
        }
        this.meetupService.setmeetups(filterdMeetups)
      }
    )

  }
  changeCity(e) {
    this.meetupForm.get('location').setValue(e.target.value, {
      onlySelf: true
    })
  }

  isMatch(meetup: Meetup) {
    if ((this.meetupForm.get('name').value!=""&&!meetup.description.includes(this.meetupForm.get('name').value))||
      (this.meetupForm.get('location').value!="בחירת איזור"&&!meetup.location.includes(this.meetupForm.get('location').value.split(" ", 2)[1]))) {
      return false
    }
    return true

  }

  openCalander() {
    this.calanderMode=!this.calanderMode
  }
  closeCalander() {
    this.calanderMode=false
  }

  getDates(searchDate) {

    this.startDate=searchDate.from
    this.endDate=searchDate.to
  }


}
