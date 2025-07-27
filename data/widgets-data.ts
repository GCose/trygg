import {
  TopPerformerData,
  DriverStatusData,
  AlertsSummaryData,
} from '@/interfaces/widgets';

/**==========================
 * Top Performer Widget Data
 ==========================*/
export const topPerformerData: TopPerformerData = {
  name: 'Mike Johnson',
  rating: 4.9,
  rides: 84,
};

/**==========================
 * Driver Status Widget Data
 ==========================*/
export const driverStatusData: DriverStatusData = {
  totalOffline: 12,
  criticalOffline: 3,
  recentOffline: 9,
};

/**=============================
 * Alerts Summary Widget Data
 =============================*/
export const alertsSummaryData: AlertsSummaryData = {
  totalExpiring: 7,
  criticalAlerts: 2,
  warningAlerts: 5,
};
