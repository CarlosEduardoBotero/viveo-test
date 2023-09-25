export interface UsersResponse {
  results: Result[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Result {
  gender: "male" | "female";
  name: Name;
  location: Location;
  email: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Id {
  name: string;
  value: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Street {
  number: number;
  name: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
