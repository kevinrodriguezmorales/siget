import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ListItem } from '@core/components/list-item/list-item';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import {
  SERVICE_ORDER_DETAIL_MOCK,
  SERVICE_ORDER_STATUS_CLASS,
  SERVICE_ORDER_STATUS_LABEL,
  ServiceOrderDetail,
} from '../../models/service-order.model';
import { EditOrder } from '../edit-order/edit-order';

@Component({
  selector: 'app-view-order',
  imports: [...MATERIAL_IMPORTS, CommonModule, Toolbar, ListItem],
  templateUrl: './view-order.html',
  styleUrl: './view-order.scss',
})
export class ViewOrder {
  protected readonly order: ServiceOrderDetail = SERVICE_ORDER_DETAIL_MOCK;
  protected readonly statusLabel = SERVICE_ORDER_STATUS_LABEL;
  protected readonly statusColor = SERVICE_ORDER_STATUS_CLASS;

  private readonly panelStore = inject(PanelStore);

  protected closePanel(): void {
    this.panelStore.close();
  }

  protected openEditOrder(orderId: string): void {
    this.panelStore.open(EditOrder, {
      orderId,
    });
  }
}
