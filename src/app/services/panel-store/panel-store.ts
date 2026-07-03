import { computed, Injectable, Signal, signal } from '@angular/core';

type SecondaryPanelType =
  | 'edit'
  | 'view';

interface SecondaryPanelState {
  open: boolean;
  type: SecondaryPanelType | null;
  data: unknown | null;
}

@Injectable()
export class PanelStore {
  private readonly secondaryPanelState = signal<SecondaryPanelState>({
    open: false,
    type: null,
    data: null
  });

  readonly secondaryPanel = this.secondaryPanelState.asReadonly();

  readonly isSecondaryPanelOpen: Signal<boolean> = computed(() => {
    return this.secondaryPanelState().open;
  });

  public openSecondaryPanel<T>(type: SecondaryPanelType, data: T): void {
    this.secondaryPanelState.set({
      open: true,
      type,
      data,
    });
  }

  public closeSecondaryPanel(): void {
    this.secondaryPanelState.set({
      open: false,
      type: null,
      data: null
    });
  }
}
