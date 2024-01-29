import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '@app/features/service/httpService/reportService/report.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input()
  ticketStatus: number = 0;
  id: number = 0;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  data: number[] = [];
  resolved: number[] = [];
  unresolved: number[] = [];
  escalated: number[] = [];
  months: string[] = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  legends: any = [];
  chartLegends: any = [];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    // console.log(this.barChartData);
    this.id = +this.route.snapshot.params['id'];
    console.log('ID:', this.id);
    this.reportService.GetChartData(this.id).subscribe(
      (data) => {
        console.log(data);
        for (const month of this.months) {
          this.resolved.push(data[month][0]);
          this.unresolved.push(data[month][1]);
          this.escalated.push(data[month][2]);
        }

        this.chartLegends.push({
          data: this.resolved,
          label: 'resolved',
          backgroundColor: '#6418C3',
          hoverBackgroundColor: '#450770',
        });
        this.chartLegends.push({
          data: this.unresolved,
          label: 'unresolved',
          backgroundColor: '#BCA0DE',
          hoverBackgroundColor: '#7D659A',
        });
        this.chartLegends.push({
          data: this.escalated,
          label: 'escalated',
          backgroundColor: '#FFA7A7',
          hoverBackgroundColor: '#FC7B7B',
        });
        this.legends = [...this.chartLegends];
      },
      (error: Error) => {
        alert('Error has occured :' + error.message);
      },
      () => {
        console.log('request completed');
      }
    );
  }
  handleChartUpdate(updatedData: any[]) {
    console.log('Chart data updated:', updatedData);
  }
  ngOnChanges() {
    console.log(this.ticketStatus);
    if (this.ticketStatus == 0) {
      this.legends = [...this.chartLegends];
    } else if (this.ticketStatus === 1) {
      this.legends = [];
      this.legends.push(this.chartLegends[0]);
    } else if (this.ticketStatus === 2) {
      this.legends = [];
      this.legends.push(this.chartLegends[1]);
    } else if (this.ticketStatus === 3) {
      this.legends = [];
      this.legends.push(this.chartLegends[2]);
    }
  }
}
