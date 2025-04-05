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

export interface LocationAndFrequency {
  location: string;
  frequency: number;
}
