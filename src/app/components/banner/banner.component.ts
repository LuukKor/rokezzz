import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Breakpoints } from '@angular/cdk/layout';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatDividerModule,
    MatButtonModule,
    NgForOf,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  protected readonly Breakpoints = Breakpoints;
  @ViewChild('container') container!: ElementRef;
}
