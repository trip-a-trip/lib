export enum VenueKind {
  Breakfast = 'breakfast',
  Lunch = 'lunch',
  Dinner = 'dinner',
  BiteDrink = 'bite-drink',
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Venue {
  name: string;
  description?: string;
  isExpensive: boolean;
  isAmazing: boolean;
  kind: VenueKind[];
  address?: string;
  coordinates: Coordinates;
}
