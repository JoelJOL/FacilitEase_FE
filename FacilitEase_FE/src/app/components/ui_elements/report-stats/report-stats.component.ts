import { Component } from '@angular/core';
import {
  Chart,
  ChartArea,
  ChartData,
  ChartDataset,
  ChartEvent,
  ChartType,
  Color,
  FontSpec,
  LegendElement,
  LegendItem,
  LegendOptions,
  ScriptableChartContext,
} from 'chart.js';

@Component({
  selector: 'app-report-stats',
  templateUrl: './report-stats.component.html',
  styleUrls: ['./report-stats.component.css'],
})
export class ReportStatsComponent {
  public doughnutChartLabels: string[] = [
    'Resolved',
    'Unresolved',
    'Escalated',
  ];
  public doughnutChartDatasets: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [20, 40, 10],
        backgroundColor: ['#6418C3', '#BCA0DE', '#FFA7A7'],
      },
    ],
  };
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [{ data: [350, 450, 100] }],
  // };
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: any = {
    legend: {
      position: 'right',
    },
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
