import { extractUserData } from "./extract_user_data";
import { LocationAndFrequency } from "./interfaces";

const usersJson = extractUserData();
const locationsAndFrequencies = extractLocationsAndFrequencies(usersJson);

console.log("Localização, Quantidade de ocorrências");
const outputLines = locationsAndFrequencies.map(
  ({ location, frequency }) => `${location}, ${frequency}`
);
outputLines.forEach(line => console.log(line));

function extractLocationsAndFrequencies(
  usersJson: any[]
): LocationAndFrequency[] {
  try {
    const frequencies = usersJson.reduce(
      (locationWithFrequency: Record<string, number>, user) => {
        const location = user.location?.toLowerCase();
        if (location) {
          locationWithFrequency[location] =
            (locationWithFrequency[location] || 0) + 1;
        }
        return locationWithFrequency;
      },
      {}
    );

    const sortedLocationFrequencies: LocationAndFrequency[] = Object.entries(
      frequencies
    )
      .map(([location, frequency]) => ({ location, frequency }))
      .sort((a, b) => b.frequency - a.frequency);

    return sortedLocationFrequencies;
  } catch (error) {
    throw Error(`Erro ao extrair localizações e frequências: ${error}`);
  }
}
