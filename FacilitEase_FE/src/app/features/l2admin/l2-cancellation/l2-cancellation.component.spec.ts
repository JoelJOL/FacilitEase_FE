import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2CancellationComponent } from './l2-cancellation.component';

describe('L2CancellationComponent', () => {
  let component: L2CancellationComponent;
  let fixture: ComponentFixture<L2CancellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L2CancellationComponent]
    });
    fixture = TestBed.createComponent(L2CancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
