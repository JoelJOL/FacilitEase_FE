import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SidebarSubfieldComponent } from '../sidebar-subfield/sidebar-subfield.component';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}

@Component({
  selector: 'app-sidebar-field',
  templateUrl: './sidebar-field.component.html',
  styleUrls: ['./sidebar-field.component.css'],
})
export class SidebarFieldComponent {
  //input the fields, subfields and the click handler and output the field and subfield clicked
  @Input() field!: Field;
  @Input() onClickHandler: (() => void | undefined) | undefined; // Dynamic onClick handler
  @Input() subfield!: string;
  @Input() collapsed: boolean = false; // Assuming 'collapsed' is an input property
  @Output() clicked = new EventEmitter<any>();
  @Output() subfieldClicked = new EventEmitter<any>();
  //to automaticlly get the first field element in the array
  @Input() set initialField(field: Field | null) {
    if (field) {
      this.active = this.field === field;
      if (this.active) {
        this.clicked.emit(this.field);
      }
    }
  }
  @ViewChild(SidebarSubfieldComponent)
  subfieldComponent!: SidebarSubfieldComponent;
  private destroy$ = new Subject<void>();

  selectedField: Field | null = null;

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Subscribe to router events to check for initialization
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.checkInitialization();
      });
  }
  // OnDestroy lifecycle hook to clean up subscriptions
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // OnInit lifecycle hook to check initialization on component creation
  ngOnInit(): void {
    this.checkInitialization();
  }
  // Method to check if the field needs to be initialized
  private checkInitialization() {
    if (!this.active && this.field === this.selectedField && !this.subfield) {
      this.active = true;
      this.clicked.emit(this.field);
      console.log('Field clicked (initialized):', this.field.title);
      this.subfieldComponent.deactivateSubfield();
    }
  }
  // Static property to keep track of the active field across all instances
  private static activeField: SidebarFieldComponent | null = null;
  active = false;
  isSidebarCollapsed = false;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.sidebarService.toggleSidebar(this.isSidebarCollapsed);
  }

  onFieldClicked() {
    if (SidebarFieldComponent.activeField) {
      SidebarFieldComponent.activeField.active = false;
    }
    this.active = true;
    SidebarFieldComponent.activeField = this;

    this.clicked.emit(this.field); // Eit an event on click with the field data
    // Additional actions on click (if needed)

    console.log('Field clicked:', this.field.title);
    this.subfieldComponent.deactivateSubfield();
  }
  onSubfieldClicked(subfield: any) {
    this.subfieldClicked.emit({ field: this.field, subfield });
  }
}
