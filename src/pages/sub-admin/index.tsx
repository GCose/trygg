import Image from 'next/image';
import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { subAdminData } from '@/data/sub-admin';
import ListTable from '@/components/ui/ListTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { TableColumn } from '@/interfaces/admin-layout';
import { SubAdminFormData } from '@/interfaces/sub-admin';
import CreateSubAdminForm from '@/components/subAdminForm';
import DashboardLayout from '@/components/DashboardLayout';
import styles from '@/src/styles/sub-admin/SubAdminPage.module.css';

const SubAdminPage = () => {
  const [subAdmins, setSubAdmins] = useState(subAdminData);

  const handleCreateAdmin = (formData: SubAdminFormData) => {
    // Generate new admin ID
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
    console.log('New Sub Admin Created:', newAdmin);
  };

  const handleViewDetails = (adminId: string) => {
    console.log('View details for admin:', adminId);
  };

  const handleEditAdmin = (adminId: string) => {
    console.log('Edit admin:', adminId);
  };

  const handleDeleteAdmin = (adminId: string) => {
    console.log('Delete admin:', adminId);
    setSubAdmins((prev) => prev.filter((admin) => admin.adminId !== adminId));
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
              src={row.avatar as string}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '500', fontSize: '0.875rem' }}>
              {value as string}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              {row.email as string}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: 'createdAt',
      label: 'Created Date',
      render: (value) => (
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {formatDateTime(value as string)}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => {
        const status = value as string;
        const statusClass = status === 'ACTIVE' ? '#059669' : '#dc2626';

        return (
          <span
            style={{
              color: statusClass,
              fontWeight: '500',
              fontSize: '0.875rem',
            }}
          >
            {status}
          </span>
        );
      },
    },
    {
      key: 'action',
      label: 'Action',
      render: (value, row) => {
        const adminId = row.adminId as string;

        return (
          <div style={{ position: 'relative' }}>
            <button className={styles.action__button}>
              <MoreHorizontal size={18} color="#6b7280" />
            </button>
            {/* In a real implementation, this would be a proper dropdown */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
                minWidth: '120px',
                display: 'none',
              }}
            >
              <button
                onClick={() => handleViewDetails(adminId)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                View Detail
              </button>
              <button
                onClick={() => handleEditAdmin(adminId)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteAdmin(adminId)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: 'none',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: '#dc2626',
                }}
              >
                Delete
              </button>
            </div>
          </div>
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
      </div>
    </DashboardLayout>
  );
};

export default SubAdminPage;
