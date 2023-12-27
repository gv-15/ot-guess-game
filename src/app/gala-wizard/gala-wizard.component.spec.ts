import { ComponentFixture, TestBed } from '@angular/core/testing';
import GalaWizardComponent from './gala-wizard.component';

describe('GalaWizardComponent', () => {
  let component: GalaWizardComponent;
  let fixture: ComponentFixture<GalaWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaWizardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalaWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
