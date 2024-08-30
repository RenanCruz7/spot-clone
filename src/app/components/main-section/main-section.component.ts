import { Component } from '@angular/core';
import { RoundButtonComponent } from "../round-button/round-button.component";

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [RoundButtonComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
