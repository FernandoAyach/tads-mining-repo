import fs from "fs";
import path from "path";

export function extractUserData() {
  const filePath = path.join(__dirname, "users-data.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(rawData);

  return jsonData;
}
