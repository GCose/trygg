import Image from 'next/image';
import { useState } from 'react';
import { subAdminData } from '@/data/sub-admin';
import ListTable from '@/components/ui/ListTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { TableColumn } from '@/interfaces/admin-layout';
import { SubAdminFormData, SubAdmin } from '@/interfaces/sub-admin';
import CreateSubAdminForm from '@/components/subAdminForm';
import DashboardLayout from '@/components/DashboardLayout';
import SubAdminDetailsModal from '@/components/modals/subAdminDetailsModal';
import EditSubAdminModal from '@/components/modals/EditSubAdminModal';
import DeleteConfirmModal from '@/components/modals/DeleteConfirmModal';
import styles from '@/src/styles/sub-admin/SubAdminPage.module.css';
import ActionDropdown from '@/components/ActionDropdown';

const SubAdminPage = () => {
  const [subAdmins, setSubAdmins] = useState(subAdminData);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<SubAdmin | null>(null);
  const [adminToDelete, setAdminToDelete] = useState<string>('');

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
      setIsDetailsModalOpen(true);
    }
  };

  const handleEditAdmin = (adminId: string) => {
    const admin = subAdmins.find((admin) => admin.adminId === adminId);
    if (admin) {
      setSelectedAdmin(admin);
      setIsEditModalOpen(true);
    }
  };

  const handleDeleteClick = (adminId: string) => {
    setAdminToDelete(adminId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = (adminId: string) => {
    setSubAdmins((prev) => prev.filter((admin) => admin.adminId !== adminId));
    setIsDeleteModalOpen(false);
    setAdminToDelete('');
  };

  const handleUpdateAdmin = (adminId: string, formData: SubAdminFormData) => {
    setSubAdmins((prev) =>
      prev.map((admin) =>
        admin.adminId === adminId
          ? {
              ...admin,
              fullName: formData.fullName,
              email: formData.email,
              avatar: formData.avatar,
            }
          : admin
      )
    );
    setIsEditModalOpen(false);
    setSelectedAdmin(null);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedAdmin(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedAdmin(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setAdminToDelete('');
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
            onDelete={() => handleDeleteClick(adminId)}
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
          isOpen={isDetailsModalOpen}
          onClose={handleCloseDetailsModal}
          admin={selectedAdmin}
          onUpdate={() => {}}
          onDelete={() => {}}
        />
        {/*==================== End of Sub Admin Details Modal ====================*/}

        {/*==================== Edit Sub Admin Modal ====================*/}
        <EditSubAdminModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          admin={selectedAdmin}
          onUpdate={handleUpdateAdmin}
        />
        {/*==================== End of Edit Sub Admin Modal ====================*/}

        {/*==================== Delete Confirmation Modal ====================*/}
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={() => handleDeleteConfirm(adminToDelete)}
          title="Delete Sub Admin"
          message="Are you sure you want to delete sub admin?"
          confirmText="Yes, Delete"
          cancelText="No, Keep"
        />
        {/*==================== End of Delete Confirmation Modal ====================*/}
      </div>
    </DashboardLayout>
  );
};

export default SubAdminPage;
