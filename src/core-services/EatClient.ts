import Axios, { AxiosInstance } from 'axios';

import { Venue, Coordinates } from './EatClient.types';

export class EatClient {
  private readonly http: AxiosInstance;

  constructor(serviceUrl: string) {
    this.http = Axios.create({
      baseURL: serviceUrl,
    });
  }

  async findVenue(
    userId: string,
    coordinates: Coordinates,
  ): Promise<Venue | null> {
    try {
      const { data } = await this.http.get<Venue>(
        `/v1/venue?userId=${userId}&latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`,
      );

      return data;
    } catch (error) {
      return null;
    }
  }
}
