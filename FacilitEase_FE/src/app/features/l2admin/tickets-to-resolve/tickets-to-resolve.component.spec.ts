import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsToResolveComponent } from './tickets-to-resolve.component';

describe('TicketsToResolveComponent', () => {
  let component: TicketsToResolveComponent;
  let fixture: ComponentFixture<TicketsToResolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsToResolveComponent]
    });
    fixture = TestBed.createComponent(TicketsToResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
