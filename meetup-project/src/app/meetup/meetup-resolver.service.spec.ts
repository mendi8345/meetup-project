import { TestBed } from '@angular/core/testing';

import { MeetupResolverService } from './meetup-resolver.service';

describe('MeetupResolverService', () => {
  let service: MeetupResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetupResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
