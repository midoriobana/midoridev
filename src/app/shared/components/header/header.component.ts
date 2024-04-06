import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentTime!: string;

  constructor() {}

  ngOnInit() {
    this.getCurrentTime();
  }

  getCurrentTime() {
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    this.currentTime = new Date().toLocaleTimeString(undefined, options);
  }
}
