import React, { useState } from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';

import { UserIcon } from 'lucide-react';

import { subAdminData } from '@/mocks/sub-admins';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import ActionDropdown from '@/src/components/dropdowns/ActionDropdown';
import CreateSubAdminForm from '@/src/components/forms/subAdminForm';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import DeleteConfirmModal from '@/src/components/modals/DeleteConfirmModal';
import ListTable from '@/src/components/ui/ListTable';
import styles from '@/src/styles/sub-admin/SubAdminPage.module.css';
import type { User } from '@/types';
import type { TableColumn } from '@/types/interfaces/admin-layout';
import type { SubAdminFormData } from '@/types/interfaces/sub-admin';
import { isLoggedIn } from '@/utils/auth';

const SubAdminsPage = () => {
  const [subAdmins, setSubAdmins] = useState(subAdminData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState<string>('');

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

  const handleDeleteClick = (adminId: string) => {
    setAdminToDelete(adminId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = (adminId: string) => {
    setSubAdmins(prev => prev.filter(admin => admin.adminId !== adminId));
    setIsDeleteModalOpen(false);
    setAdminToDelete('');
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setAdminToDelete('');
  };

  const formatDateTime = (dateTime: string) => {
    return `${new Date(dateTime).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })} at ${new Date(dateTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })}`;
  };

  const subAdminColumns: TableColumn[] = [
    { key: 'adminId', label: 'Admin ID' },
    {
      key: 'fullName',
      label: 'Admin Name',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
            }}
          >
            <Image
              width={32}
              height={32}
              alt="Admin"
              src={row.avatar || '/profiles/profile-1.avif'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span style={{ fontWeight: 500, color: '#111827' }}>
            {value as string}
          </span>
        </div>
      ),
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'phoneNumber',
      label: 'Phone Number',
    },
    {
      key: 'createdAt',
      label: 'Created Date',
      render: value => formatDateTime(value as string),
    },
    {
      key: 'action',
      label: 'Action',
      render: (_, row) => {
        const adminId = row.adminId as string;
        return <ActionDropdown onDelete={() => handleDeleteClick(adminId)} />;
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

        {/*==================== Delete Confirmation Modal ====================*/}
        <DeleteConfirmModal
          cancelText="No, Keep"
          title="Suspend Sub Admin"
          confirmText="Yes, Suspend"
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          message="Are you sure you want to suspend sub admin?"
          onConfirm={() => handleDeleteConfirm(adminToDelete)}
        />
        {/*==================== End of Delete Confirmation Modal ====================*/}
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
