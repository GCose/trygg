export interface TopDriverData {
  name: string;
  avatar: string;
  rating: number;
  rides: number;
}

export interface DriverStatusData {
  totalOffline: number;
  criticalOffline: number;
  recentOffline: number;
}

export interface AlertsSummaryData {
  totalExpiring: number;
  criticalAlerts: number;
  warningAlerts: number;
}

export interface DriverApplicationStatsData {
  totalApplications: number;
  approved: number;
  pending: number;
  rejected: number;
}

export interface TopDriverWidgetProps {
  data: TopDriverData;
}

export interface DriverStatusWidgetProps {
  data: DriverStatusData;
}

export interface AlertsSummaryWidgetProps {
  data: AlertsSummaryData;
}

export interface DriverApplicationStatsWidgetProps {
  data: DriverApplicationStatsData;
}
