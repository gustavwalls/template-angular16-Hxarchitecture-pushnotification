import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BcpuiModule } from './shared/bcpUi/bcpui.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BcpuiModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'hexagonal_architecture_angular';
}
