import { Injectable, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  breakpointSubscription = new Subscription();
  isSmallScreen = signal(false);
  constructor(private _breakpointObserver: BreakpointObserver) {}

  breakpointSubscribe() {
    this.breakpointSubscription = this._breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        const matched = Object.values(result.breakpoints).some(
          (breakpointIsMatched) => breakpointIsMatched,
        );

        if (matched && !this.isSmallScreen()) {
          this.isSmallScreen.set(true);
        } else if (!matched) {
          this.isSmallScreen.set(false);
        }
      });
  }
}
