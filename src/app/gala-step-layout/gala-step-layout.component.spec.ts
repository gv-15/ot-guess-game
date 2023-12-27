import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaStepLayoutComponent } from './gala-step-layout.component';

describe('GalaStepLayoutComponent', () => {
  let component: GalaStepLayoutComponent;
  let fixture: ComponentFixture<GalaStepLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaStepLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalaStepLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
