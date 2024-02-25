import { Component } from '@angular/core';
import { CONTACT_DATA } from '@/constants';
import { AddSpacesEveryNPipe } from '@/pipes/add-spaces-every-n/add-spaces-every-n.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AddSpacesEveryNPipe, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly CONTACT_DATA = CONTACT_DATA;
}
