import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSubComponent } from './title-sub.component';

describe('TitleSubComponent', () => {
  let component: TitleSubComponent;
  let fixture: ComponentFixture<TitleSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleSubComponent]
    });
    fixture = TestBed.createComponent(TitleSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
