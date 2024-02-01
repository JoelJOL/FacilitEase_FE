import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailViewComponent } from './ticket-detail-view.component';

describe('TicketDetailViewComponent', () => {
  let component: TicketDetailViewComponent;
  let fixture: ComponentFixture<TicketDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailViewComponent]
    });
    fixture = TestBed.createComponent(TicketDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
