import React, { useState } from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';

import { UserIcon } from 'lucide-react';

import { subAdminData } from '@/mocks/sub-admins';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import ActionDropdown from '@/src/components/dropdowns/ActionDropdown';
import CreateSubAdminForm from '@/src/components/forms/subAdminForm';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import DynamicAdminConfirmModal from '@/src/components/modals/DynamicAdminConfirmModal';
import StatusBadge from '@/src/components/shared/status';
import ListTable from '@/src/components/ui/ListTable';
import styles from '@/src/styles/sub-admin/SubAdminPage.module.css';
import type { User } from '@/types';
import type { TableColumn } from '@/types/interfaces/admin-layout';
import type {
  SubAdminFormData,
  AdminActionState,
  SubAdmin,
} from '@/types/interfaces/sub-admin';
import { isLoggedIn } from '@/utils/auth';

const SubAdminsPage = () => {
  const [subAdmins, setSubAdmins] = useState(subAdminData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionState, setActionState] = useState<AdminActionState | null>(null);

  const handleCreateAdmin = (formData: SubAdminFormData) => {
    const newAdminId = `ADM${(subAdmins.length + 1).toString().padStart(3, '0')}`;

    const newAdmin = {
      id: (subAdmins.length + 1).toString(),
      adminId: newAdminId,
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      avatar: formData.avatar,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 19),
      status: 'ACTIVE' as const,
    };

    setSubAdmins(prev => [newAdmin, ...prev]);
  };

  const handleStatusChangeClick = (admin: SubAdmin) => {
    const newActionState: AdminActionState = {
      adminId: admin.adminId,
      fullName: admin.fullName,
      email: admin.email,
      currentStatus: admin.status,
      actionType: admin.status === 'ACTIVE' ? 'SUSPEND' : 'ACTIVATE',
    };

    setActionState(newActionState);
    setIsModalOpen(true);
  };

  const handleStatusChangeConfirm = () => {
    if (!actionState) return;

    setSubAdmins(prev =>
      prev.map(admin =>
        admin.adminId === actionState.adminId
          ? {
              ...admin,
              status:
                actionState.actionType === 'SUSPEND' ? 'SUSPENDED' : 'ACTIVE',
            }
          : admin
      )
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActionState(null);
  };

  const subAdminColumns: TableColumn[] = [
    { key: 'adminId', label: 'Admin ID' },
    {
      key: 'fullName',
      label: 'Name',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              flexShrink: 0,
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          >
            <Image
              width={40}
              height={40}
              alt="Admin"
              src={(row.avatar as string) || '/profiles/profile-1.avif'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span style={{ fontWeight: 500, color: '#111827' }}>
            {value as string}
          </span>
        </div>
      ),
    },
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Phone' },
    {
      key: 'status',
      label: 'Status',
      render: value => <StatusBadge status={value as string} />,
    },
    { key: 'createdAt', label: 'Created' },
    {
      key: 'action',
      label: 'Action',
      render: (_, row) => {
        const admin = row as unknown as SubAdmin;
        return (
          <ActionDropdown
            status={admin.status}
            onStatusChange={() => handleStatusChangeClick(admin)}
          />
        );
      },
    },
  ];

  return (
    <DashboardLayout
      role="SUPER"
      title="Sub Admins"
      meta={SuperAdminPageMeta.subAdminsPage}
    >
      <div className={styles.sub__admin__page}>
        {/*==================== Two Column Layout ====================*/}
        <div className={styles.two__column__layout}>
          {/*==================== Left Column - Create Form ====================*/}
          <div className={styles.left__column}>
            <CreateSubAdminForm onCreateAdmin={handleCreateAdmin} />
          </div>
          {/*==================== End of Left Column ====================*/}

          {/*==================== Right Column - Sub Admins List ====================*/}
          <div className={styles.right__column}>
            <div className={styles.table__container}>
              <div className={styles.table__with__icon}>
                <UserIcon size={20} color="#fbbf24" />
                <ListTable
                  data={subAdmins}
                  title="Sub Admin"
                  columns={subAdminColumns}
                />
              </div>
            </div>
          </div>
          {/*==================== End of Right Column ====================*/}
        </div>
        {/*==================== End of Two Column Layout ====================*/}

        {/*==================== Dynamic Status Change Modal ====================*/}
        <DynamicAdminConfirmModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          actionState={actionState}
          onConfirm={handleStatusChangeConfirm}
        />
        {/*==================== End of Dynamic Status Change Modal ====================*/}
      </div>
    </DashboardLayout>
  );
};

export default SubAdminsPage;

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const userData = isLoggedIn(req);

  if (!userData) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const user = userData as User;

  if (user.role !== 'SUPER') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      userData,
    },
  };
};
