import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { PAGES } from '../../constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';

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
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly PAGES = PAGES;
  private bpSubscription: Subscription = new Subscription();
  private isSmallScreen = signal(false);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {}
  private bpObserve() {
    this.bpSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isSmallScreen.set(result.matches);
      });
  }

  get getIsSmallScreen() {
    return this.isSmallScreen();
  }

  ngOnInit() {
    this.bpObserve();
  }

  ngOnDestroy() {
    this.bpSubscription.unsubscribe();
  }
}
