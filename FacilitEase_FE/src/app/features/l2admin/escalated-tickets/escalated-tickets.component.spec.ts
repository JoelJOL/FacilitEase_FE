import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalatedticketsComponent } from './escalated-tickets.component';

describe('EscalatedTicketsComponent', () => {
  let component: EscalatedticketsComponent;
  let fixture: ComponentFixture<EscalatedticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscalatedticketsComponent],
    });
    fixture = TestBed.createComponent(EscalatedticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
