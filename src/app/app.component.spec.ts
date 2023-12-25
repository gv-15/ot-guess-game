import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockRender } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    fixture.detectChanges();
    expect(fixture.point.componentInstance).toBeDefined();
  });
});
