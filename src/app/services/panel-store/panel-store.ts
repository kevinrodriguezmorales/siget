import { computed, Injectable, Signal, signal, Type } from '@angular/core';

type SecondaryPanelType = 'edit' | 'view';

export interface SecondaryPanelState {
  open: boolean;
  component: Type<unknown> | null;
  inputs: Record<string, unknown>;
  type: SecondaryPanelType;
}

@Injectable()
export class PanelStore {
  private readonly secondaryPanelState = signal<SecondaryPanelState>({
    open: false,
    component: null,
    inputs: {},
    type: 'edit',
  });

  readonly secondaryPanel: Signal<SecondaryPanelState> = this.secondaryPanelState.asReadonly();

  readonly isSecondaryPanelOpen: Signal<boolean> = computed(() => {
    return this.secondaryPanelState().open;
  });

  readonly secondaryPanelTypeClass: Signal<SecondaryPanelType> = computed(() => {
    return this.secondaryPanelState().type;
  });

  open(
    component: Type<unknown>,
    inputs: Record<string, unknown> = {},
    type: SecondaryPanelType = 'edit',
  ): void {
    this.secondaryPanelState.set({
      open: true,
      component,
      inputs,
      type,
    });
  }

  close(): void {
    this.secondaryPanelState.set({
      open: false,
      component: null,
      inputs: {},
      type: 'edit',
    });
  }
}
