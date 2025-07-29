import { Component } from '@angular/core';
import { Appointment} from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-list-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-list-component.component.html',
  styleUrl: './appointment-list-component.component.scss'
})
export class AppointmentListComponentComponent {
  newAppointmentTitle: string = ' ';
  newAppointmentDate: Date = new Date();
  appointments: Appointment [] = []


addAppointment() {
  // Add only if title is not empty and date is valid
  if (this.newAppointmentTitle.trim().length > 0 && this.newAppointmentDate) {
    let newAppointment: Appointment = {
      id: this.appointments.length + 1,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    };
    console.log(newAppointment);
    this.appointments.push(newAppointment);
    this.newAppointmentTitle = ' ';
    this.newAppointmentDate = new Date();
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
    alert('Appointment added successfully!');
  } else {
    alert('Please enter a valid title and date.');
  }
}
deleteAppointment(appointment: Appointment) {
  const index = this.appointments.indexOf(appointment);
  if (index > -1) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
    alert('Appointment deleted successfully!');
  } else {
    alert('Appointment not found.');
  }
}
ngOnInit() {
  const storedAppointments = localStorage.getItem('appointments');
  if (storedAppointments) {
    this.appointments = JSON.parse(storedAppointments);
    }
  }
}
