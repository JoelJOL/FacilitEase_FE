import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedAssetsComponent } from './unassigned-assets.component';

describe('UnassignedAssetsComponent', () => {
  let component: UnassignedAssetsComponent;
  let fixture: ComponentFixture<UnassignedAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnassignedAssetsComponent]
    });
    fixture = TestBed.createComponent(UnassignedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
