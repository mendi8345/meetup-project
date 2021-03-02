import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Meetup} from "./meetup.model";
import {MeetupService} from "./meetup.service";


@Injectable({
  providedIn: 'root'
})
export class MeetupResolverService implements Resolve<Meetup[]>  {

  constructor(private meetupService: MeetupService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[]|Observable<any[]>|Promise<any[]> {


    const meetups=this.meetupService.getmeetups();
    if(meetups.length==0)
    return this.meetupService.FatchMeetups();

    return meetups;
  }



}


