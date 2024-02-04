import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Administrativo'
  },
  {
    name: 'Clientes',
    url: '/admin/clientes',
    iconComponent: { name: 'cil-person' }
  },
  {
    name: 'Empleados',
    url: '/admin/empleados',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Nomina',
    url: '/admin/Nomina',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-money' }
  },
  {
    name: 'Producción',
    title: true
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-bar-chart' },
  },
  {
    name: 'Facturación',
    url: '/facturacion',
    iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Programas de Producción',
    url: '/produccion',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    title: true,
    name: 'Inventario'
  },
  {
    name: 'Materiales',
    url: '/materiales',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Estilos',
    url: '/estilos',
    iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Estaciones',
    url: '/estaciones',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Paquetes',
    url: '/paquetes',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Transacciones de bodega',
    url: '/transaccionesbodega',
    iconComponent: { name: 'cil-chart-pie' }
  },
];
