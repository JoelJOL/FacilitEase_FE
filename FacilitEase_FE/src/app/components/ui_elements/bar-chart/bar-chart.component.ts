import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '@app/features/service/reportService/report.service';

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
  public barChartLegend: boolean = true;
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
  barChartData: any[] = [
    {
      data: [],
      label: 'Resolved',
    },
    { data: [], label: 'Unresolved' },
    { data: [], label: 'Escalated' },
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    this.barChartData[0].hoverBackgroundColor = '#450770';
    this.barChartData[1].hoverBackgroundColor = '#7D659A';
    this.barChartData[2].hoverBackgroundColor = '#FC7B7B';
    console.log(e);
  }
  ngOnChange(changes: SimpleChanges): void {
    // Detect changes to other input properties if needed
    console.log('Component has changed:', changes);
  }

  ngOnInit() {
    this.id = +this.route.queryParamMap.subscribe;
    console.log('ID:', this.id);
    this.reportService.GetChartData(this.id).subscribe(
      (data) => {
        console.log(data);
        for (const month of this.months) {
          this.resolved.push(data[month][0]);
          this.unresolved.push(data[month][1]);
          this.escalated.push(data[month][2]);
        }
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = this.resolved;
        clone[0].backgroundColor = '#6418C3';
        clone[1].data = this.unresolved;
        clone[1].backgroundColor = '#BCA0DE';
        clone[2].data = this.escalated;
        clone[2].backgroundColor = '#FFA7A7';
        this.barChartData = clone;
        console.log(this.barChartData[0].data);
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
}
