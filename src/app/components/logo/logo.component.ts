import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent implements OnInit {
  constructor(private _titleService: Title) {}

  private _title = '';

  private setTitle(): void {
    this._title = this._titleService.getTitle();
  }

  get getTitle(): string {
    return this._title;
  }

  ngOnInit(): void {
    this.setTitle();
  }
}
