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
  @Input() field!: Field;
  @Input() onClickHandler: (() => void | undefined) | undefined; // Dynamic onClick handler
  @Input() subfield!: string;
  @Input() collapsed: boolean = false; // Assuming 'collapsed' is an input property
  @Output() clicked = new EventEmitter<any>();
  @Output() subfieldClicked = new EventEmitter<any>();
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
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.checkInitialization();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.checkInitialization();
  }

  private checkInitialization() {
    if (!this.active && this.field === this.selectedField && !this.subfield) {
      this.active = true;
      this.clicked.emit(this.field);
      console.log('Field clicked (initialized):', this.field.title);
      this.subfieldComponent.deactivateSubfield();
    }
  }
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
