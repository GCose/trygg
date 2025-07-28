import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { RevenueChartProps, TooltipProps } from '@/interfaces/chart';
import styles from '@/src/styles/charts/RevenueChart.module.css';

const RevenueChart = ({ data, title }: RevenueChartProps) => {
  const formatRevenue = (value: number) => {
    return `$${(value / 1000).toFixed(0)}k`;
  };

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          <p className={styles.tooltip__label}>{`${label} 2025`}</p>
          <p className={styles.tooltip__value}>
            Revenue: <span>${payload[0].value.toLocaleString()}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.chart__container}>
      {/*==================== Chart Header ====================*/}
      <div className={styles.chart__header}>
        <h3 className={styles.chart__title}>{title}</h3>
        <TrendingUp size={20} color="#fbbf24" />
      </div>
      {/*==================== End of Chart Header ====================*/}

      {/*==================== Chart Content ====================*/}
      <div className={styles.chart__wrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="month"
              stroke="#6b7280"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis
              tickFormatter={formatRevenue}
              stroke="#6b7280"
              fontSize={12}
              fontWeight={500}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              name="Revenue"
              fill="#fbbf24"
              dataKey="revenue"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/*==================== End of Chart Content ====================*/}
    </div>
  );
};

export default RevenueChart;
