import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CONTACT_DATA } from '@/constants';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AddSpacesEveryNPipe } from '@/pipes/add-spaces-every-n/add-spaces-every-n.pipe';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from '@/components/logo/logo.component';
import { IPages } from '@/interfaces';

interface IFooterCols {
  label: string;
  pages: IPages[];
}

export const FOOTER_COLS: IFooterCols[] = [
  {
    label: 'Na skróty',
    pages: [
      {
        label: 'O mnie',
        path: '/',
      },
      {
        label: 'Umów trening',
        path: '/umow-trening',
      },
      {
        label: 'Kontakt',
        path: '/kontakt',
      },
    ],
  },
];

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
    LogoComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly FOOTER_COLS = FOOTER_COLS;
  protected readonly CONTACT_DATA = CONTACT_DATA;
}
