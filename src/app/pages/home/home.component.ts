import { Component } from '@angular/core';
import { BannerComponent } from '@/components/banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [BannerComponent],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
