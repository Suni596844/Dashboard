import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-switchable-graph',
  standalone: true,
  templateUrl: './switchable-graph.component.html',
  styleUrls: ['./switchable-graph.component.scss']
})
export class SwitchableGraphComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;
  selectedTab: 'thisYear' | 'lastYear' = 'thisYear';

  // Sample data
  thisYearData = [5000, 11000, 18000, 24000, 32000];
  lastYearData = [4000, 10000, 16000, 21000, 29000];

  ngAfterViewInit(): void {
    this.renderChart();
  }

  switchTab(tab: 'thisYear' | 'lastYear'): void {
    this.selectedTab = tab;
    if (this.chart) {
      this.chart.data.datasets[0].data = tab === 'thisYear' ? this.thisYearData : this.lastYearData;
      this.chart.update();
    }
  }

  renderChart(): void {
    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Growth Metrics',
          data: this.selectedTab === 'thisYear' ? this.thisYearData : this.lastYearData,
          borderColor: '#808080', // Gray line
          backgroundColor: 'rgba(128, 128, 128, 0.2)',
          fill: false,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false }, beginAtZero: true }
        }
      }
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }
}
