import {DatePipe} from '@angular/common';
import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-range',
  templateUrl: './datepicker-range.html',
  styles: [`

  .calander{
    position: absolute;
    top: 56px;
    left: 20px;
    z-index: 200;
    /* width: 474px; */
    background:white;
}
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;

    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }

  `]
})
export class NgbdDatepickerRange {
  @Output() closeCalander: EventEmitter<any>=new EventEmitter();
  @Input() open: Boolean
  @HostListener('document:click', ['$event']) clickedOutside($event) {
    // console.log("click")
    // this.open=true;
  }

  hoveredDate: NgbDate|null=null;

  fromDate: NgbDate;
  toDate: NgbDate|null=null;
  from: string
  to: string

  constructor(calendar: NgbCalendar, private datePipe: DatePipe) {
    this.fromDate=calendar.getToday();
    this.toDate=calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate&&!this.toDate) {
      this.fromDate=date;
    } else if (this.fromDate&&!this.toDate&&date.after(this.fromDate)) {
      this.toDate=date;
    } else {
      this.toDate=null;
      this.fromDate=date
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate&&!this.toDate&&this.hoveredDate&&date.after(this.fromDate)&&date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate&&date.after(this.fromDate)&&date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate)||(this.toDate&&date.equals(this.toDate))||this.isInside(date)||this.isHovered(date);
  }

  close() {
    if (this.fromDate!=null) {

      this.from=this.datePipe.transform(new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day), "yyyy-MM-dd");
      this.to=this.datePipe.transform(new Date(this.toDate.year, this.toDate.month, this.toDate.day), "yyyy-MM-dd");

      const searchDate={from: this.from, to: this.to}
      console.log("searchDate", searchDate)
      this.closeCalander.emit(searchDate)

    }
    console.log("open =", this.open)

  }
}
