import { Component } from '@angular/core';
import { Toolbar } from '@core/components/toolbar/toolbar';
import { SectionHeader } from '@core/components/section-header/section-header';
import { MATERIAL_IMPORTS } from '@shared/material/material-imports';
import { InformationContainer } from '@core/components/information-container/information-container';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { DateHour } from '@core/components/date-hour/date-hour';

export type ServiceOrderStatus =
  | 'Pendiente'
  | 'En diagnóstico'
  | 'En proceso'
  | 'En revisión'
  | 'Finalizada';

export type ServiceOrderResponsible = 'Vendedor' | 'Mecánico' | 'Cajero';

export interface ServiceOrderSummary {
  code: string;
  customer: string;
  motorcycle: string;
  status: ServiceOrderStatus;
  responsible: ServiceOrderResponsible;
}

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

const ordenesServicioResumen: ServiceOrderSummary[] = [
  {
    code: 'OS-001',
    customer: 'Juan Pérez',
    motorcycle: 'Honda Wave',
    status: 'Pendiente',
    responsible: 'Vendedor',
  },
  {
    code: 'OS-002',
    customer: 'Ana Torres',
    motorcycle: 'Yamaha FZ',
    status: 'En diagnóstico',
    responsible: 'Mecánico',
  },
  {
    code: 'OS-003',
    customer: 'Luis Ramos',
    motorcycle: 'Bajaj Pulsar',
    status: 'En proceso',
    responsible: 'Mecánico',
  },
  {
    code: 'OS-004',
    customer: 'Carla Medina',
    motorcycle: 'Honda XR',
    status: 'En revisión',
    responsible: 'Mecánico',
  },
  {
    code: 'OS-005',
    customer: 'Pedro Salazar',
    motorcycle: 'Suzuki GN125',
    status: 'Finalizada',
    responsible: 'Cajero',
  },
];

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
    MatToolbarModule,
    MatTableModule,
    SectionHeader,
    InformationContainer,
    CommonModule,
    DateHour
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
  protected dataSource = ordenesServicioResumen;
  protected metricCards: DashboardMetricCard[] = dashboardMetricCards;
}
