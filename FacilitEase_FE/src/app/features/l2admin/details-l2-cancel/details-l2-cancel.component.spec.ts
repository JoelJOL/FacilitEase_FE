import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsL2CancelComponent } from './details-l2-cancel.component';

describe('DetailsL2CancelComponent', () => {
  let component: DetailsL2CancelComponent;
  let fixture: ComponentFixture<DetailsL2CancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsL2CancelComponent]
    });
    fixture = TestBed.createComponent(DetailsL2CancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
