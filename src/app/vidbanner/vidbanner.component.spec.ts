import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidbannerComponent } from './vidbanner.component';

describe('VidbannerComponent', () => {
  let component: VidbannerComponent;
  let fixture: ComponentFixture<VidbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VidbannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
