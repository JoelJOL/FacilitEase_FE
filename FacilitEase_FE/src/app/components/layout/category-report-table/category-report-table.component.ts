import { Component } from '@angular/core';
import {
  CategoryReportData,
  CategoryReportMonthData,
} from '@app/features/l2admin/L2AdminModel/model';
import { ReportService } from '@app/features/service/httpService/reportService/report.service';

@Component({
  selector: 'app-category-report-table',
  templateUrl: './category-report-table.component.html',
  styleUrls: ['./category-report-table.component.css'],
})
export class CategoryReportTableComponent {
  constructor(private reportService: ReportService) {}

  categoryDataArrays: any[] = [];
  months: string[] = [];

  ngOnInit() {
    this.reportService
      .GetCategoryReportData()
      .subscribe((reportData: CategoryReportData) => {
        console.log(reportData);
        this.months = Object.keys(reportData);

        // Iterate over each category
        Object.keys(reportData).forEach((month) => {
          const monthDataArray = reportData[month];

          monthDataArray.forEach((categoryData: CategoryReportMonthData) => {
            const categoryArray = [];
            categoryArray.push(categoryData.categoryName); // Push category name as the first element

            // Push resolved, unresolved, and escalated counts for the category
            categoryArray.push(categoryData.resolvedCount);
            categoryArray.push(categoryData.unresolvedCount);
            categoryArray.push(categoryData.escalatedCount);

            // Push the category array to the main array
            this.categoryDataArrays.push(categoryArray);
          });
        });
      });
    console.log(this.categoryDataArrays);
  }
}
