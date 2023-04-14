import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullOverlayComponent } from './full-overlay.component';

describe('FullOverlayComponent', () => {
  let component: FullOverlayComponent;
  let fixture: ComponentFixture<FullOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
