import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Alert } from '@core/components/alert/alert';
import { InformationContainer } from '@core/components/information-container/information-container';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { PanelStore } from '@services/panel-store/panel-store';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { SERVICE_ORDERS } from '../../models/service-order.model';
import { MatTableModule } from '@angular/material/table';
import { ViewOrder } from '../view-order/view-order';

@Component({
  selector: 'app-list-service-orders',
  imports: [
    ...MATERIAL_IMPORTS,
    CommonModule,
    Toolbar,
    SectionHeader,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    Alert,
    InformationContainer,
    MatTableModule,
  ],
  templateUrl: './list-service-orders.html',
  styleUrl: './list-service-orders.scss',
})
export class ListServiceOrders {
  protected readonly panelStore: PanelStore = inject(PanelStore);
  private readonly location = inject(Location);
  protected orderStatus: any[] = [
    { value: 1, viewValue: 'Pendiente' },
    { value: 2, viewValue: 'En atención' },
    { value: 3, viewValue: 'Finalizada' },
    { value: 4, viewValue: 'Cancelada' },
  ];
  protected displayedColumns: string[] = [
    'code',
    'customer',
    'motorcycle',
    'plate',
    'status',
    'responsible',
    'lastUpdated',
    'action'
  ];
  protected dataSource = SERVICE_ORDERS;

  protected goBack(): void {
    this.location.back();
  }

  protected viewOrder(orderId: number): void {
    this.panelStore.open(ViewOrder, {
      orderId,
    }, "view");
  }
}
