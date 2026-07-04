import { computed, Injectable, Signal, signal, Type } from '@angular/core';

type SecondaryPanelType = 'edit' | 'view';

export interface SecondaryPanelState {
  open: boolean;
  component: Type<unknown> | null;
  inputs: Record<string, unknown>;
}

@Injectable()
export class PanelStore {
  private readonly secondaryPanelState = signal<SecondaryPanelState>({
    open: false,
    component: null,
    inputs: {},
  });

  readonly secondaryPanel: Signal<SecondaryPanelState> = this.secondaryPanelState.asReadonly();

  readonly isSecondaryPanelOpen: Signal<boolean> = computed(() => {
    return this.secondaryPanelState().open;
  });

  open(component: Type<unknown>, inputs: Record<string, unknown> = {}): void {
    this.secondaryPanelState.set({
      open: true,
      component,
      inputs,
    });
  }

  close(): void {
    this.secondaryPanelState.set({
      open: false,
      component: null,
      inputs: {},
    });
  }
}
