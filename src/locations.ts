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
    console.log("Nome da localização, Quantidade de ocorrências");

    const locationFrequencies = lowerCaseLocations.map((location) => {
      const frequency = calculateLocationFrequency(location, lowerCaseLocations);
      return { location: location, frequency: frequency };
    });

    const sortedLocationFrequencies = locationFrequencies.sort(
      (a, b) => b.frequency - a.frequency
    );

    sortedLocationFrequencies.forEach(({ location, frequency }) => {
      console.log(location, ", ", frequency);
    });

    return sortedLocationFrequencies;
  } catch (error) {
    console.error("Erro ao extrair locais e frequências:", error);
    return [];
  }
}

console.log("----Bônus----");
const usersJson = extractUserData();
extractLocationsAndFrequencies(usersJson);
