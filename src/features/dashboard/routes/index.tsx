import { RouteError } from '@/components/error/ErrorElement';
import { lazyImport } from '@/utils/lazyImports';
import { Outlet, RouteObject } from 'react-router-dom';
import Layout from '../components/layout/Layout';
const { Dashboard } = lazyImport(
  () => import('../components/dashboard/Dashboard'),
  'Dashboard'
);
const { Patients } = lazyImport(
  () => import('../components/patients/Patients'),
  'Patients'
);
const { Messages } = lazyImport(
  () => import('../components/messages/Messages'),
  'Messages'
);
const { Appointments } = lazyImport(
  () => import('../components/appointments/Appointments'),
  'Appointments'
);
const { Analytics } = lazyImport(
  () => import('../components/analytics/Analytics'),
  'Analytics'
);
const { Admin } = lazyImport(
  () => import('../components/admin/Admin'),
  'Admin'
);

export const DashboardRouteList: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: '/patients',
    element: <Patients />,
  },
  {
    path: '/messages',
    element: <Messages />,
  },

  {
    path: '/appointments',
    element: <Appointments />,
  },

  {
    path: '/analytics',
    element: <Analytics />,
  },

  {
    path: '/admin',
    element: <Admin />,
  },
];

const DashboardOutlet = (
  <Layout>
    <Outlet />
  </Layout>
);
export const DashboardPageRoutes: RouteObject = {
  path: '',
  element: DashboardOutlet,
  errorElement: <RouteError />,
  children: DashboardRouteList,
};
