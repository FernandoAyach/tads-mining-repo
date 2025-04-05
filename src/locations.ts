import { extractUserData } from "./extract_user_data";

function calculateLocationFrequency(
  targetLocation: string,
  locations: string[]
): number {
  return locations.reduce((frequency, location) => {
    if (location === targetLocation) {
      return frequency + 1;
    }
    return frequency;
  }, 0);
}

function extractLocationsAndFrequencies(usersJson: any[]) {
  try {
    const locations = usersJson.map((user) => user.location);
    const cleanedLocations = locations.filter(
      (location) => location != undefined
    );
    const lowerCaseLocations = cleanedLocations.map((location: string) =>
      location.toLowerCase()
    );
    const locationFrequencies = lowerCaseLocations.map((location) => {
      const frequency = calculateLocationFrequency(location, lowerCaseLocations);
      return { location: location, frequency: frequency };
    });

    const sortedLocationFrequencies = locationFrequencies.sort(
      (a, b) => b.frequency - a.frequency
    );

    return sortedLocationFrequencies;
  } catch (error) {
    throw Error(`Erro ao extrair localizações e frequências:${error}`)
  }
}

console.log("----Bônus----");
const usersJson = extractUserData();
extractLocationsAndFrequencies(usersJson);
