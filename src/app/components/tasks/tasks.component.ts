import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: string[] = [
    'Complete UI design for dashboard',
    'Fix navigation menu responsiveness',
    'Integrate API for user authentication',
    'Implement dark mode functionality',
    'Refactor SCSS files for efficiency',
    'Add hover effects to sidebar icons',
    'Optimize page load speed',
    'Set up error handling for login',
    'Create reusable button component',
    'Improve accessibility for forms',
    'Resolve mobile view scrolling issue',
    'Apply consistent font styles',
    'Enhance tooltips for usability',
    'Validate input fields dynamically',
    'Test and debug UI elements',
    'Implement automatic data refresh',
    'Align logo placement correctly',
    'Develop loading animation effect',
    'Simplify settings panel layout',
    'Verify form submissions work properly'
  ];
}
