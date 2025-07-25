import { ListTableProps } from '@/interfaces/navigation';
import styles from '@/src/styles/ListTable.module.css';

const ListTable = ({
  columns,
  data,
  title,
  maxHeight = '400px',
}: ListTableProps) => {
  return (
    <div className={styles.table__container}>
      {/*==================== Table Header ====================*/}
      {title && (
        <div className={styles.table__header}>
          <h3 className={styles.table__title}>{title}</h3>
        </div>
      )}

      {/*==================== Table Content ====================*/}
      <div className={styles.table__wrapper} style={{ maxHeight }}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={styles.th}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data.map((row, index) => (
              <tr key={index} className={styles.tr}>
                {columns.map((column) => (
                  <td key={column.key} className={styles.td}>
                    {column.render
                      ? (column.render(row[column.key], row) as React.ReactNode)
                      : (row[column.key] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*==================== End of Table Content ====================*/}
    </div>
  );
};

export default ListTable;
