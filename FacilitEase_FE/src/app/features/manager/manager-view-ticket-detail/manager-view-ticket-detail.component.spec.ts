import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewTicketDetailComponent } from './manager-view-ticket-detail.component';

describe('ManagerViewTicketDetailComponent', () => {
  let component: ManagerViewTicketDetailComponent;
  let fixture: ComponentFixture<ManagerViewTicketDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerViewTicketDetailComponent]
    });
    fixture = TestBed.createComponent(ManagerViewTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
