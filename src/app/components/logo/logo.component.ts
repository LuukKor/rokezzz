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
  constructor(private titleService: Title) {}

  private title = '';

  private setTitle(): void {
    this.title = this.titleService.getTitle();
  }

  get getTitle(): string {
    return this.title;
  }

  ngOnInit(): void {
    this.setTitle();
  }
}
