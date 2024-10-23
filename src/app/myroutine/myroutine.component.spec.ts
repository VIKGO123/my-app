import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyroutineComponent } from './myroutine.component';

describe('MyroutineComponent', () => {
  let component: MyroutineComponent;
  let fixture: ComponentFixture<MyroutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyroutineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyroutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
