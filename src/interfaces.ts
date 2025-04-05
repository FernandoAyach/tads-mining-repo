export interface Metrics {
  min: number;
  max: number;
  avg: number;
  median: number;
  std: number;
}

export interface MetricsBundle {
  followersCount: Metrics;
  followingCount: Metrics;
  acountAge: Metrics;
}
