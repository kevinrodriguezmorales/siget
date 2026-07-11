import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DateHour } from '@core/components/date-hour/date-hour';
import { InformationContainer } from '@core/components/information-container/information-container';
import { SectionHeader } from '@core/components/section-header/section-header';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { SERVICE_ORDERS } from '@features/services/service-order/models/service-order.model';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';

export type MetricTrend = 'up' | 'down';
export type MetricTone = 'positive' | 'negative' | 'neutral';

export interface DashboardMetricCard {
  title: string;
  value: number;
  trend: MetricTrend;
  tone: MetricTone;
  description: string;
  icon: string;
}

const dashboardMetricCards: DashboardMetricCard[] = [
  {
    title: 'Solicitudes pendientes',
    value: 21,
    trend: 'down',
    tone: 'positive',
    description: '-4 desde la semana pasada',
    icon: 'checklist_rtl',
  },
  {
    title: 'Tardanzas',
    value: 10,
    trend: 'up',
    tone: 'negative',
    description: '+3 desde la semana pasada',
    icon: 'chronic',
  },
  {
    title: 'Bugs reportados',
    value: 14,
    trend: 'up',
    tone: 'positive',
    description: '-3 desde ayer',
    icon: 'bug_report',
  },
  {
    title: 'Funcionalidades',
    value: 2,
    trend: 'up',
    tone: 'positive',
    description: '+1 desde ayer',
    icon: 'stacks',
  },
];

@Component({
  selector: 'app-home',
  imports: [
    ...MATERIAL_IMPORTS,
    MatTableModule,
    SectionHeader,
    InformationContainer,
    CommonModule,
    DateHour,
    Toolbar
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected list: number[] = [1, 2, 3, 4, 5, 6];
  protected listCard: number[] = [1, 2, 3, 4];
  protected displayedColumns: string[] = [
    'code',
    'customer',
    'motorcycle',
    'status',
    'responsible',
    'action'
  ];
  protected dataSource = SERVICE_ORDERS;
  protected metricCards: DashboardMetricCard[] = dashboardMetricCards;
}
