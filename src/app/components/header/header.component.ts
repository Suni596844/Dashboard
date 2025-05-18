import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showNotificationPanel = false;

  toggleNotification(): void {
    this.showNotificationPanel = !this.showNotificationPanel;
  }
}
