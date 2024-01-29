import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchComponent } from './dynamic-search.component';

describe('DynamicSearchComponent', () => {
  let component: DynamicSearchComponent;
  let fixture: ComponentFixture<DynamicSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicSearchComponent]
    });
    fixture = TestBed.createComponent(DynamicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
