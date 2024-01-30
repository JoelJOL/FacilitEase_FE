import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDhTicketComponent } from './detailed-dh-ticket.component';

describe('DetailedDhTicketComponent', () => {
  let component: DetailedDhTicketComponent;
  let fixture: ComponentFixture<DetailedDhTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedDhTicketComponent]
    });
    fixture = TestBed.createComponent(DetailedDhTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
