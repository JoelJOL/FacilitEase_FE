import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReportService } from '@app/features/service/httpService/reportService/report.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { WeekReport } from '@app/features/l2admin/L2AdminModel/model';
import { ReportDataService } from '@app/features/service/dataService/ReportDataService/report-data.service';

@Component({
  selector: 'app-report-stats',
  templateUrl: './report-stats.component.html',
  styleUrls: ['./report-stats.component.css'],
})
export class ReportStatsComponent {
  constructor(
    private reportService: ReportService,
    private reportDataService: ReportDataService
  ) {}
  dT: number = 0;
  dR: number = 0;
  dU: number = 0;
  dE: number = 0;
  @ViewChild('doughchart')
  doughnutChartCanvas!: ElementRef;
  @ViewChild('resolvedLegend')
  resolvedLegend!: ElementRef;
  @ViewChild('escalatedLegend')
  escalatedLegend!: ElementRef;

  showDoughnutChart: boolean = true;
  weekReport = {
    dailyTickets: 0,
    dailyResolved: 0,
    dailyUnresolved: 0,
    dailyEscalated: 0,
    weeklyTickets: 0,
    weeklyResolved: 0,
    weeklyUnresolved: 0,
    weeklyEscalated: 0,
  };

  doughnutChartData: any = { datasets: [] };
  doughnutChartDatasets: any = {};

  ngOnInit() {
    this.reportService.GetWeekData().subscribe((data: WeekReport) => {
      console.log(data);
      this.weekReport = data;
      this.doughnutChartData.datasets.push({
        data: [
          data.weeklyResolved,
          data.weeklyUnresolved,
          data.weeklyEscalated,
        ],
      });
      this.doughnutChartData.labels = this.doughnutChartLabels;
      this.doughnutChartData.datasets[0].backgroundColor = [
        '#6418C3',
        '#BCA0DE',
      ];
      this.doughnutChartDatasets = this.doughnutChartData;
      this.dT = this.weekReport.dailyTickets;
      this.dR = this.weekReport.dailyResolved;
      this.dU = this.weekReport.dailyUnresolved;
      this.dE = this.weekReport.dailyEscalated;

      if (
        data.weeklyResolved == 0 &&
        data.weeklyUnresolved == 0 &&
        data.weeklyEscalated == 0
      ) {
        this.showDoughnutChart = false;
      }

      this.reportDataService.weekReport = this.weekReport;
      console.log(this.doughnutChartData.datasets[0].data);
    });
  }

  ngOnChanges() {
    // ngOnChanges is not used here as it's typically used in child components when input properties change
  }

  ngAfterViewInit() {
    this.reportService.doughnutChartCanvas = this.doughnutChartCanvas
      .nativeElement as HTMLCanvasElement;
    this.reportDataService.resolvedLegend = this.resolvedLegend
      .nativeElement as HTMLCanvasElement;
    this.reportDataService.escalatedLegend = this.escalatedLegend
      .nativeElement as HTMLCanvasElement;
  }

  doughnutChartLabels: string[] = ['Resolved', 'Unresolved', 'Escalated'];
  doughnutChartType: ChartType = 'doughnut';

  doughnutChartOptions: any = {
    legend: {
      position: 'right',
    },
  };
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
