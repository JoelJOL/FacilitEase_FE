import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableNewComponent } from './data-table-new.component';

describe('DataTableNewComponent', () => {
  let component: DataTableNewComponent;
  let fixture: ComponentFixture<DataTableNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTableNewComponent]
    });
    fixture = TestBed.createComponent(DataTableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
