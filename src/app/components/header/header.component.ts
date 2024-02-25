import { Component } from '@angular/core';
import { PAGES } from '@/constants';
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
  constructor(private _responsiveService: ResponsiveService) {}
  protected readonly PAGES = PAGES;
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  // TODO: handle active route on scroll

  get isSmallScreen(): boolean {
    return this._responsiveService.isSmallScreen();
  }
}
