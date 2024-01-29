import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedTicketsViewComponent } from './resolved-tickets-view.component';

describe('ResolvedTicketsViewComponent', () => {
  let component: ResolvedTicketsViewComponent;
  let fixture: ComponentFixture<ResolvedTicketsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolvedTicketsViewComponent]
    });
    fixture = TestBed.createComponent(ResolvedTicketsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
