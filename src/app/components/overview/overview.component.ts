import { Component } from '@angular/core';
import { SwitchableGraphComponent } from '../switchable-graph/switchable-graph.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [SwitchableGraphComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent { }
