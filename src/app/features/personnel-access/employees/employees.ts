import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubNavbar } from '@core/components/sub-navbar/sub-navbar';

@Component({
  selector: 'employees',
  imports: [
    RouterOutlet,
    SubNavbar
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {}
