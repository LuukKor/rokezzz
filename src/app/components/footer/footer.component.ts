import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FOOTER_COLS, CONTACT_DATA } from '@/constants';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AddSpacesEveryNPipe } from '@/pipes/add-spaces-every-n.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatGridListModule,
    MatListModule,
    NgForOf,
    RouterLink,
    MatButtonModule,
    AddSpacesEveryNPipe,
    MatIconModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly FOOTER_COLS = FOOTER_COLS;
  protected readonly CONTACT_DATA = CONTACT_DATA;
}
