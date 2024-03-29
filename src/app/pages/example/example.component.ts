import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLE } from '@/constants';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(`${PAGE_TITLE} - Example`);
  }
}
