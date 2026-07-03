import { Component } from '@angular/core';

export interface ListItemData {
  icon: string;
  overline: string;
  title: string;
  supporting?: string;
}

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss',
})
export class ListItem {}
