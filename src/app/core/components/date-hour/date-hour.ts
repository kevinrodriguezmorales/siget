import { CommonModule, DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'date-hour',
  imports: [CommonModule, DatePipe],
  templateUrl: './date-hour.html',
  styleUrl: './date-hour.scss',
})
export class DateHour {
  protected currentDate = signal(new Date());
  private timeoutId?: ReturnType<typeof setTimeout>;
  private intervalId?: ReturnType<typeof setInterval>;

  public ngOnInit(): void {
    const now = new Date();

    const millisecondsUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    this.timeoutId = setTimeout(() => {
      this.currentDate.set(new Date());

      this.intervalId = setInterval(() => {
        this.currentDate.set(new Date());
      }, 60_000);
    }, millisecondsUntilNextMinute);
  }

  public ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
