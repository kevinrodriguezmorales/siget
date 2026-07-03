import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubmenuStore {
  private readonly openState = signal(true);

  readonly isOpen: Signal<boolean> = this.openState.asReadonly();

  public toggle(): void {
    this.openState.update((isOpen) => !isOpen);
  }
}
