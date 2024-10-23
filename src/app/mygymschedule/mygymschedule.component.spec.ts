import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygymscheduleComponent } from './mygymschedule.component';

describe('MygymscheduleComponent', () => {
  let component: MygymscheduleComponent;
  let fixture: ComponentFixture<MygymscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MygymscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MygymscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
