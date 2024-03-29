import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
