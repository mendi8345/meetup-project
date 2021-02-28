import {Person} from "./person.model";

export class Meetup {
  constructor(
    public id: number,
    public date: Date,
    public location: String,
    public description: String,
    public subscribers: Person[],
  ) {}
  }
