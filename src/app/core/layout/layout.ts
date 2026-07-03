import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from '@core/components/sidenav/sidenav';
import { Topbar } from '@core/components/topbar/topbar';

@Component({
  selector: 'layout',
  imports: [RouterOutlet, Sidenav, Topbar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
