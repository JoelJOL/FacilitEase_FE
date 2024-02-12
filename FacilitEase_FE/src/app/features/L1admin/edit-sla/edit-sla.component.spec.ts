import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSlaComponent } from './edit-sla.component';

describe('EditSlaComponent', () => {
  let component: EditSlaComponent;
  let fixture: ComponentFixture<EditSlaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSlaComponent]
    });
    fixture = TestBed.createComponent(EditSlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
