export type ServiceOrderStatus =
  | 'PENDIENTE'
  | 'EN_DIAGNOSTICO'
  | 'EN_PROCESO'
  | 'EN_REVISION'
  | 'EN_ATENCION'
  | 'FINALIZADA';

export type ServiceOrderResponsible = 'Vendedor' | 'Mecánico' | 'Cajero';

export const SERVICE_ORDER_STATUS_LABEL: Record<ServiceOrderStatus, string> = {
  PENDIENTE: 'Pendiente',
  EN_DIAGNOSTICO: 'En diagnóstico',
  EN_PROCESO: 'En proceso',
  EN_REVISION: 'En revisión',
  EN_ATENCION: 'En atención',
  FINALIZADA: 'Finalizada',
};

export const SERVICE_ORDER_STATUS_CLASS: Record<ServiceOrderStatus, string> = {
  PENDIENTE: 'status-pending',
  EN_DIAGNOSTICO: 'status-diagnostic',
  EN_PROCESO: 'status-inprocess',
  EN_REVISION: 'status-review',
  EN_ATENCION: 'status-attention',
  FINALIZADA: 'status-done',
};

export interface ServiceOrderSummary {
  code: string;
  customer: string;
  motorcycle: string;
  plate: string;
  status: ServiceOrderStatus;
  responsible: ServiceOrderResponsible;
  lastUpdated: string;
}

export interface ServiceOrderDetail {
  code: string;
  status: ServiceOrderStatus;

  lastUpdated: string;

  serviceRequestCode: string;
  quotationCode: string;

  customer: {
    fullName: string;
    phone: string;
  };

  motorcycle: {
    model: string;
    plate: string;
  };

  reportedProblem: string;
  previousDiagnosis: string;

  completedServices: string[];

  observations: string;
}

export const SERVICE_ORDERS: ServiceOrderSummary[] = [
  {
    code: 'OS-001',
    customer: 'Mauricio Rodriguez Melgar',
    motorcycle: 'Bajaj Pulsar',
    plate: 'ABC-123',
    status: 'PENDIENTE',
    responsible: 'Vendedor',
    lastUpdated: '18/06/2026',
  },
  {
    code: 'OS-002',
    customer: 'Luis Ramos',
    motorcycle: 'Honda Wave',
    plate: 'XYZ-456',
    status: 'EN_DIAGNOSTICO',
    responsible: 'Mecánico',
    lastUpdated: '18/06/2026',
  },
  {
    code: 'OS-003',
    customer: 'Ana Torres',
    motorcycle: 'Yamaha FZ',
    plate: 'MNO-789',
    status: 'EN_ATENCION',
    responsible: 'Mecánico',
    lastUpdated: '18/06/2026',
  },
  {
    code: 'OS-004',
    customer: 'Carla Medina',
    motorcycle: 'Honda XR',
    plate: 'PWO-423',
    status: 'EN_REVISION',
    responsible: 'Mecánico',
    lastUpdated: '17/06/2026',
  },
  {
    code: 'OS-005',
    customer: 'Pedro Salazar',
    motorcycle: 'Suzuki GN125',
    plate: 'GNI-125',
    status: 'FINALIZADA',
    responsible: 'Cajero',
    lastUpdated: '17/06/2026',
  },
];

export interface ServiceOrderDetailItem {
  icon: string;
  overline: string;
  title?: string;
  supporting?: string;
  items?: string[];
}

export const SERVICE_ORDER_DETAIL_MOCK: ServiceOrderDetail = {
  code: 'OS-4352',
  status: 'EN_ATENCION',
  lastUpdated: '7/7/2026',
  serviceRequestCode: 'SS-2521',
  quotationCode: 'COT-352',

  customer: {
    fullName: 'Mauricio Rodriguez Melgar',
    phone: '7009865',
  },

  motorcycle: {
    model: 'Pulsar Bajaj',
    plate: 'ABC-123',
  },

  reportedProblem:
    'Se presenta avería aparente en el arrancador, se recomienda una prueba manual para descartar desgaste mecanico.',

  previousDiagnosis:
    'Se presenta avería aparente en el arrancador, se recomienda una prueba manual para descartar desgaste mecanico.',

  completedServices: ['Revisión del sistema eléctrico', 'Revisión del sistema eléctrico'],

  observations: 'No se presentan observaciones',
};
