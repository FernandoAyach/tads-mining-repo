import { avg, max, median, min, std } from "./calculate_functions";
import { extractUserData } from "./extract_user_data";
import { Metrics, MetricsBundle } from "./interfaces";

const usersJson = extractUserData();
const metricsBundle = extractMetrics(usersJson);

console.log("Metric, Min, Max, Avg, Median, Std");
console.log(formatCSVLine("Followers Count", metricsBundle.followersCount));
console.log(formatCSVLine("Following Count", metricsBundle.followingCount));
console.log(formatCSVLine("Account Age (years)", metricsBundle.acountAge));

function extractMetrics(usersJson: any[]): MetricsBundle {
  const followersCountList = usersJson.map((user) => user.followers_count);
  const followingCountList = usersJson.map((user) => user.following_count);

  const accountAgeInYearsList = usersJson.map((user) => {
    const createdAt = new Date(user.created_at);
    const ageInMs = Date.now() - createdAt.getTime();
    return ageInMs / (1000 * 60 * 60 * 24 * 365);
  });

  const followersCountMetrics = calculateMetrics(followersCountList);
  const followingCountMetrics = calculateMetrics(followingCountList);
  const accountAgeMetrics = calculateMetrics(accountAgeInYearsList);

  return {
    followersCount: followersCountMetrics,
    followingCount: followingCountMetrics,
    acountAge: accountAgeMetrics,
  };
}

function calculateMetrics(list: number[]): Metrics {
  return {
    min: min(list),
    max: max(list),
    avg: avg(list),
    median: median(list),
    std: std(list),
  };
}

function formatCSVLine(title: string, metrics: Metrics): string {
  return `${title}, ${metrics.min.toFixed(2)}, ${metrics.max.toFixed(
    2
  )}, ${metrics.avg.toFixed(2)}, ${metrics.median.toFixed(
    2
  )}, ${metrics.std.toFixed(2)}`;
}
