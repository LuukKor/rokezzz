import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '@/components/banner/banner.component';
import { ServicesComponent } from '@/components/services/services.component';
import { TrainingFormComponent } from '@/components/training-form/training-form.component';
import { ContactComponent } from '@/components/contact/contact.component';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLE } from '@/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    BannerComponent,
    ServicesComponent,
    TrainingFormComponent,
    ContactComponent,
  ],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(`${PAGE_TITLE} - Home`);
  }
}
