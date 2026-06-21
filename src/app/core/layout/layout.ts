import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '@core/components/navbar/navbar';
import { Toolbar } from '@core/components/toolbar/toolbar';

@Component({
  selector: 'layout',
  imports: [
    RouterOutlet,
    Navbar,
    Toolbar
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
