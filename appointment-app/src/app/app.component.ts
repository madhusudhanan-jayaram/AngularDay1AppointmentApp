import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { AppointmentListComponentComponent } from './appointment-list-component/appointment-list-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appointment-app';
}
