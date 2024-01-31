import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEscalatedComponent } from './details-escalated.component';

describe('DetailsEscalatedComponent', () => {
  let component: DetailsEscalatedComponent;
  let fixture: ComponentFixture<DetailsEscalatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEscalatedComponent]
    });
    fixture = TestBed.createComponent(DetailsEscalatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
