import DashboardLayout from '@/components/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import React from 'react';

const index = () => {
  return (
    <DashboardLayout
      title="Settings"
      meta={SuperAdminPageMeta.settingsPage}
    ></DashboardLayout>
  );
};

export default index;
