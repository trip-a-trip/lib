export interface VenueRequiestOptions {
  skipIds?: string[];
}

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

export interface Link {
  title: string;
  url: string;
}

export interface Venue {
  id: string;
  name: string;
  description?: string;
  isExpensive: boolean;
  isAmazing: boolean;
  kind: VenueKind[];
  address?: string;
  coordinates: Coordinates;
  links: Link[];
  authorId: string | null;
}
