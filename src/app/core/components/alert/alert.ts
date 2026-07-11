import { Component, input } from '@angular/core';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

@Component({
  selector: 'alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  public readonly description = input.required<string>();
  public readonly icon = input<string | null>(null);
  public readonly type = input<AlertType>('info');
}
