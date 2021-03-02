import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeetupComponent } from './meetup/meetup.component';
import { MeetupItemComponent } from './meetup/meetup-list/meetup-item/meetup-item.component';
import { MeetupDetailComponent } from './meetup/meetup-detail/meetup-detail.component';
import {MeetupListComponent} from './meetup/meetup-list/meetup-list.component';
import { SearchComponent } from './search/search.component';
import { PersonListComponent } from './meetup/meetup-detail/person-list/person-list.component';
import { PersonItemComponent } from './meetup/meetup-detail/person-list/person-item/person-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoLineComponent } from './logo-line/logo-line.component';
import {DatePipe} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdDatepickerRange} from './datepicker-range/datepicker-range';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeetupListComponent,
    MeetupComponent,
    MeetupItemComponent,
    MeetupDetailComponent,
    SearchComponent,
    PersonListComponent,
    PersonItemComponent,
    LogoLineComponent,
    NgbdDatepickerRange,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
     HttpClientModule,
     NgbModule,
    //  NgbPaginationModule, NgbAlertModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
