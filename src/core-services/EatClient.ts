import Axios, { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import { Venue, Coordinates, VenueRequiestOptions } from './EatClient.types';

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
    params: VenueRequiestOptions = {},
  ): Promise<Venue | null> {
    try {
      const query = stringify({
        userId,
        ...coordinates,
        ...params,
      });

      const { data } = await this.http.get<Venue>(`/v1/venue?${query}`);

      return data;
    } catch (error) {
      return null;
    }
  }
}
