import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRejectCommentModalComponent } from './ticket-reject-comment-modal.component';

describe('TicketRejectCommentModalComponent', () => {
  let component: TicketRejectCommentModalComponent;
  let fixture: ComponentFixture<TicketRejectCommentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketRejectCommentModalComponent]
    });
    fixture = TestBed.createComponent(TicketRejectCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
