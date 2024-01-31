import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAssignedComponent } from './details-assigned.component';

describe('DetailsAssignedComponent', () => {
  let component: DetailsAssignedComponent;
  let fixture: ComponentFixture<DetailsAssignedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAssignedComponent]
    });
    fixture = TestBed.createComponent(DetailsAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
