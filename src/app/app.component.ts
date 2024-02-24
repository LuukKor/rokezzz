import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from './services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Rokezzz';
  constructor(private _responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this._responsiveService.breakpointSubscribe();
  }

  ngOnDestroy(): void {
    this._responsiveService.breakpointSubscription.unsubscribe();
  }
}
