import { Component } from '@angular/core';
import { BannerComponent } from '@/components/banner/banner.component';
import { ServicesComponent } from '@/components/services/services.component';
import { TrainingFormComponent } from '@/components/training-form/training-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [BannerComponent, ServicesComponent, TrainingFormComponent],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
