import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListComponentComponent } from './appointment-list-component.component';


describe('AppointmentListComponentComponent', () => {
  let component: AppointmentListComponentComponent;
  let fixture: ComponentFixture<AppointmentListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
