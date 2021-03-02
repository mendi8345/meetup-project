import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';
import {Meetup} from './meetup.model';
import {Person} from './person.model';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  meetupsChanged = new Subject<Meetup[]>();
  public meetups: Meetup[] =[]

// public meetups: Meetup[] = [
//   new Meetup(1,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png"),new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(2,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"יובל שוורץ","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(3,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(4,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(5,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(6,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(7,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(1,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),
//   new Meetup(1,new Date(),"ירושלים","Aws metting about EC2,Rds,S3",[new Person(1,"מנדי כהן","mend@8345@gmail.com","0532530265","C:\Users\USER\Desktop\visualStudio\angular\meetup-project\meetup-project\src\assets\Image 1-2@2x.png")]),

// ];
//  meetups: Meetup[] = []

  constructor(private http: HttpClient) {
   }






   getMeetup(index: number) {
     return this.meetups[index];
   }

   addMeetup(meetup: Meetup) {
     this.meetups.push(meetup);
     this.meetupsChanged.next(this.meetups.slice());
   }

   updateMeetup(index: number, newMeetup: Meetup) {
     this.meetups[index] = newMeetup;
     this.meetupsChanged.next(this.meetups.slice());
   }

   deleteMeetup(index: number) {
     this.meetups.splice(index, 1);
     this.meetupsChanged.next(this.meetups.slice());
   }

   setmeetups(meetups: Meetup[]) {
    this.meetups = meetups;
    this.meetupsChanged.next(meetups);
  }
  getmeetups() {
    return this.meetups.slice();
  }
    FatchMeetups(): Observable<any> {
    return this.http.get("https://localhost:44378/meetup").pipe(
       tap(meetups => {
         console.log(meetups)
         this.setmeetups(meetups)
       })
     )
  }
  FatchMeetupsBetweenDates(startDate,endDate): Observable<any> {
    return this.http.get("https://localhost:44378/meetup/GetMeetupsBetweenDates/"+startDate+"/"+endDate).pipe(
       tap(meetups => {
         console.log(meetups)
         this.setmeetups(meetups)
       })
     )
  }


}
