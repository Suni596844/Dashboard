import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-spendings',
  standalone: true,
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.scss']
})
export class SpendingsComponent implements AfterViewInit {
  @ViewChild('spendingsChartCanvas') spendingsChartCanvas!: ElementRef<HTMLCanvasElement>;
  spendingsChart!: Chart;

  ngAfterViewInit(): void {
    if (!this.spendingsChartCanvas) {
      console.error("Chart canvas not found!");
      return;
    }
    this.renderSpendingsChart();
  }

  renderSpendingsChart(): void {
    const ctx = this.spendingsChartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error("Canvas context is null!");
      return;
    }

    console.log("Rendering Spendings Bar Chart...");

    const data = {
      labels: ['Server', 'Hosting', 'Services', 'Others'],
      datasets: [{
        label: 'Spendings Breakdown (%)',
        data: [20, 40, 15, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    };

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}%`
            }
          }
        }
      }
    };

    this.spendingsChart = new Chart(ctx, config);
    console.log("Spendings Bar Chart Rendered Successfully!");
  }
}
