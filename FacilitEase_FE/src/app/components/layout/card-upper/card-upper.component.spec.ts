import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardUpperComponent } from './card-upper.component';

describe('CardUpperComponent', () => {
  let component: CardUpperComponent;
  let fixture: ComponentFixture<CardUpperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUpperComponent]
    });
    fixture = TestBed.createComponent(CardUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
