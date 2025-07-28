import Image from 'next/image';
import { useState } from 'react';
import { subAdminData } from '@/data/sub-admin';
import ListTable from '@/components/ui/ListTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { TableColumn } from '@/interfaces/admin-layout';
import { SubAdminFormData, SubAdmin } from '@/interfaces/sub-admin';
import CreateSubAdminForm from '@/components/subAdminForm';
import DashboardLayout from '@/components/DashboardLayout';
import styles from '@/src/styles/sub-admin/SubAdminPage.module.css';
import ActionDropdown from '@/components/ActionDropdown';
import SubAdminDetailsModal from '@/components/modals/subAdminDetailsModal';

const SubAdminPage = () => {
  const [subAdmins, setSubAdmins] = useState(subAdminData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<SubAdmin | null>(null);

  const handleCreateAdmin = (formData: SubAdminFormData) => {
    const newAdminId = `ADM${(subAdmins.length + 1).toString().padStart(3, '0')}`;

    const newAdmin = {
      id: (subAdmins.length + 1).toString(),
      adminId: newAdminId,
      fullName: formData.fullName,
      email: formData.email,
      avatar: formData.avatar,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 19),
      status: 'ACTIVE' as const,
    };

    setSubAdmins((prev) => [newAdmin, ...prev]);
  };

  const handleViewDetails = (adminId: string) => {
    const admin = subAdmins.find((admin) => admin.adminId === adminId);
    if (admin) {
      setSelectedAdmin(admin);
      setIsModalOpen(true);
    }
  };

  const handleEditAdmin = (adminId: string) => {
    console.log('Edit admin:', adminId);
  };

  const handleDeleteAdmin = (adminId: string) => {
    setSubAdmins((prev) => prev.filter((admin) => admin.adminId !== adminId));
  };

  const handleUpdateAdmin = (adminId: string) => {
    console.log('Update admin:', adminId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAdmin(null);
  };

  const formatDateTime = (dateTime: string) => {
    return (
      new Date(dateTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }) +
      ' at ' +
      new Date(dateTime).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    );
  };

  {
    /*==================== Sub Admin Table Columns ====================*/
  }
  const subAdminColumns: TableColumn[] = [
    { key: 'adminId', label: 'Admin ID' },
    {
      key: 'fullName',
      label: 'Admin',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              width={32}
              height={32}
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
    {
      key: 'createdAt',
      label: 'Created Date',
      render: (value) => formatDateTime(value as string),
    },
    {
      key: 'action',
      label: 'Action',
      render: (_, row) => {
        const adminId = row.adminId as string;
        return (
          <ActionDropdown
            onViewDetails={() => handleViewDetails(adminId)}
            onEdit={() => handleEditAdmin(adminId)}
            onDelete={() => handleDeleteAdmin(adminId)}
          />
        );
      },
    },
  ];
  {
    /*==================== End of Sub Admin Table Columns ====================*/
  }

  return (
    <DashboardLayout title="Sub Admins" meta={SuperAdminPageMeta.subAdminsPage}>
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
              <ListTable
                title="Sub Admin"
                data={subAdmins}
                columns={subAdminColumns}
              />
            </div>
          </div>
          {/*==================== End of Right Column ====================*/}
        </div>
        {/*==================== End of Two Column Layout ====================*/}

        {/*==================== Sub Admin Details Modal ====================*/}
        <SubAdminDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          admin={selectedAdmin}
          onUpdate={handleUpdateAdmin}
          onDelete={handleDeleteAdmin}
        />
        {/*==================== End of Sub Admin Details Modal ====================*/}
      </div>
    </DashboardLayout>
  );
};

export default SubAdminPage;
