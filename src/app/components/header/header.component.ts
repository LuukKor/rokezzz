import { Component } from '@angular/core';
import { PAGES } from '../../constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbarModule, MatButtonModule],
  standalone: true,
})
export class HeaderComponent {
  protected readonly PAGES = PAGES;
}
