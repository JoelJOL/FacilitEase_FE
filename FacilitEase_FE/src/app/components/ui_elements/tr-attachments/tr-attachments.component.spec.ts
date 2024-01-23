import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrAttachmentsComponent } from './tr-attachments.component';

describe('TrAttachmentsComponent', () => {
  let component: TrAttachmentsComponent;
  let fixture: ComponentFixture<TrAttachmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrAttachmentsComponent]
    });
    fixture = TestBed.createComponent(TrAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
