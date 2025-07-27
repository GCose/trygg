export interface TopPerformerData {
  name: string;
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

export interface TopPerformerWidgetProps {
  data: TopPerformerData;
}

export interface DriverStatusWidgetProps {
  data: DriverStatusData;
}

export interface AlertsSummaryWidgetProps {
  data: AlertsSummaryData;
}
