import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLE } from '@/constants';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./404.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(`${PAGE_TITLE} - 404`);
  }
}
