import {
  afterNextRender,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage, MatDividerModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  constructor() {
    afterNextRender(() => {
      console.log(this.container);
    });
  }
  protected readonly Breakpoints = Breakpoints;
  @ViewChild('container') container!: ElementRef;
  prev() {
    const container = this.container.nativeElement;
    const slides = container.querySelectorAll('.banner-carousel__slide');
    const slideWidth = slides[0].clientWidth;

    console.log(container);

    container && (container.scrollLeft = container.scrollLeft - slideWidth);
  }

  next() {
    const container = this.container.nativeElement;
    const slides = container.querySelectorAll('.banner-carousel__slide');
    const slideWidth = slides[0].clientWidth;

    console.log(container);

    container && (container.scrollLeft = container.scrollLeft + slideWidth);
  }
}
