import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTicketToResolveComponent } from './details-ticket-to-resolve.component';

describe('DetailsTicketToResolveComponent', () => {
  let component: DetailsTicketToResolveComponent;
  let fixture: ComponentFixture<DetailsTicketToResolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTicketToResolveComponent]
    });
    fixture = TestBed.createComponent(DetailsTicketToResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
