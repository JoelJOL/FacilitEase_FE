import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailViewNoeditComponent } from './ticket-detail-view-noedit.component';

describe('TicketDetailViewNoeditComponent', () => {
  let component: TicketDetailViewNoeditComponent;
  let fixture: ComponentFixture<TicketDetailViewNoeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailViewNoeditComponent]
    });
    fixture = TestBed.createComponent(TicketDetailViewNoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
