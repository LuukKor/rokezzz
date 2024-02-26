import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      imports: [MatCardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have Breakpoints defined', () => {
    expect(component.Breakpoints).toBeDefined();
  });

  it('should render image element with correct src', () => {
    const imgElement = fixture.debugElement.query(By.css('.banner__image'));
    expect(imgElement.nativeElement.src).toContain('assets/images/banner.webp');
  });

  it('should render button element with correct routerLink and fragment', () => {
    const buttonElement = fixture.debugElement.query(
      By.css('a[routerLink="/"][fragment="umow-trening"]'),
    );
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.textContent.trim()).toEqual(
      'Umów trening',
    );
  });
});
