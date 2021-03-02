import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLineComponent } from './logo-line.component';

describe('LogoLineComponent', () => {
  let component: LogoLineComponent;
  let fixture: ComponentFixture<LogoLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
