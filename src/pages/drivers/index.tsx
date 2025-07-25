import DashboardLayout from '@/components/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import React from 'react';

const DriversPage = () => {
  return (
    <DashboardLayout
      title="Drivers"
      meta={SuperAdminPageMeta.driversPage}
    ></DashboardLayout>
  );
};

export default DriversPage;
