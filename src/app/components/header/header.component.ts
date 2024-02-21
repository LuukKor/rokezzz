import { Component, OnDestroy, OnInit } from '@angular/core';
import { PAGES } from '../../constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

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
  ],
  standalone: true,
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly PAGES = PAGES;
  private bpSubscription: Subscription = new Subscription();
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  private bpObserve() {
    this.bpSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }

  ngOnInit() {
    this.bpObserve();
  }

  ngOnDestroy() {
    this.bpSubscription.unsubscribe();
  }
}
