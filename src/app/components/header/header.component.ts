import {
  afterNextRender,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { SCROLL_Y_OFFSET } from '@/constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '@/components/logo/logo.component';
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResponsiveService } from '@/services/responsive.service';
import { IPages } from '@/interfaces';

const PAGES: IPages[] = [
  {
    label: 'O mnie',
    path: '/',
    fragment: 'o-mnie',
  },
  {
    label: 'Osiągnięcia',
    path: '/example',
    fragment: '1',
  },
  {
    label: 'Przemiany',
    path: '/example',
    fragment: '2',
  },
  {
    label: 'Galeria',
    path: '/example',
    fragment: '3',
  },
  {
    label: 'Kontakt',
    path: '/',
    fragment: 'kontakt',
  },
  {
    label: 'Umów trening',
    path: '/',
    fragment: 'umow-trening',
  },
];

function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();

  if (rect.bottom < 0) return false;

  if (rect.top > window.innerHeight) return false;

  return rect.top >= SCROLL_Y_OFFSET && rect.bottom <= window.innerHeight;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    LogoComponent,
    RouterLink,
    MatMenuModule,
    RouterLinkActive,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
  ],
  standalone: true,
})
export class HeaderComponent {
  readonly PAGES = PAGES;
  sections: NodeListOf<HTMLElement> | null = null;
  private _activeSection = signal('');
  private _showHeader = signal(true);
  linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
  constructor(private _responsiveService: ResponsiveService) {
    afterNextRender(() => {
      this.sections = document.querySelectorAll('section');
    });
  }

  //TODO: fix onscroll active sections

  @HostListener('document:wheel', ['$event'])
  onWheel(e: WheelEvent): void {
    if (e.deltaY > -1 && window.screenY !== 0) {
      this._showHeader.set(false);
    } else {
      this._showHeader.set(true);
    }

    const sectionInViewport =
      this.sections &&
      Array.from(this.sections)?.map((section: HTMLElement) => {
        return isInViewport(section) && section.id;
      });

    const activeSection =
      sectionInViewport?.find((section) => typeof section === 'string') || '';

    if (activeSection !== this._activeSection()) {
      this._activeSection.set(activeSection);
    }
  }

  get activeSection(): string {
    return this._activeSection();
  }

  get showHeader(): boolean {
    return this._showHeader();
  }

  get isSmallScreen(): boolean {
    return this._responsiveService.isSmallScreen();
  }
}
