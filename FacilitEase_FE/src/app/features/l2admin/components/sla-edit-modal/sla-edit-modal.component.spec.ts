import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaEditModalComponent } from './sla-edit-modal.component';

describe('SlaEditModalComponent', () => {
  let component: SlaEditModalComponent;
  let fixture: ComponentFixture<SlaEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlaEditModalComponent]
    });
    fixture = TestBed.createComponent(SlaEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
