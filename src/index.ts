import fs from "fs";
import path from "path";
import { avg, max, median, min, std } from "./calculate_functions";

interface Metrics {
  min: number;
  max: number;
  avg: number;
  median: number;
  std: number;
}

function extractUserData() {
  const filePath = path.join(__dirname, "users-data.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(rawData);

  return jsonData;
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
  return `${title.padEnd(20)} | ${metrics.min.toFixed(2).padStart(10)} | ${metrics.max.toFixed(2).padStart(10)} | ${metrics.avg.toFixed(2).padStart(10)} | ${metrics.median.toFixed(2).padStart(10)} | ${metrics.std.toFixed(2).padStart(10)}`;
}

function extractMetrics(usersJson: any[]): void {
  const followersCountList = usersJson.map(user => user.followers_count);
  const followingCountList = usersJson.map(user => user.following_count);

  const accountAgeInYearsList = usersJson.map(user => {
    const createdAt = new Date(user.created_at);
    const ageInMs = Date.now() - createdAt.getTime();
    return ageInMs / (1000 * 60 * 60 * 24 * 365);
  });

  const followersCountMetrics = calculateMetrics(followersCountList);
  const followingCountMetrics = calculateMetrics(followingCountList);
  const accountAgeMetrics = calculateMetrics(accountAgeInYearsList);

  console.log("Metric               |       Min |       Max |       Avg |     Median |        Std");
  console.log("-----------------------------------------------------------------------------------");
  console.log(formatCSVLine("Followers Count", followersCountMetrics));
  console.log(formatCSVLine("Following Count", followingCountMetrics));
  console.log(formatCSVLine("Account Age (years)", accountAgeMetrics));
}

const usersJson = extractUserData();
extractMetrics(usersJson);
