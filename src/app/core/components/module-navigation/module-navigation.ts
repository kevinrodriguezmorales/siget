import { Component, inject } from '@angular/core';
import { ModuleNavigationStore } from '@services/module-navigation-store/module-navigation-store';

@Component({
  selector: 'module-navigation',
  imports: [],
  templateUrl: './module-navigation.html',
  styleUrl: './module-navigation.scss',
})
export class ModuleNavigation {
  readonly moduleNavigationStore = inject(ModuleNavigationStore);
}
