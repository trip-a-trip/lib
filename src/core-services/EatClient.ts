import Axios, { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import {
  Venue,
  Coordinates,
  VenueRequiestOptions,
  Seen,
} from './EatClient.types';

export class EatClient {
  private readonly http: AxiosInstance;

  constructor(serviceUrl: string) {
    this.http = Axios.create({
      baseURL: serviceUrl,
    });
  }

  async createVenue(fields: Venue): Promise<void> {
    await this.http.post('/v1/venue', fields);
  }

  async fetchHistory(from: Date, to: Date): Promise<Seen[]> {
    const query = stringify({
      from,
      to,
    });

    const { data } = await this.http.get(`/v1/history?${query}`);

    return data.map((item: any) => ({ ...item, date: new Date(item.date) }));
  }

  async findVenue(
    userId: string,
    coordinates: Coordinates,
    params: VenueRequiestOptions = {},
  ): Promise<Venue | null> {
    try {
      const query = stringify(
        {
          ...coordinates,
          userId,
          skipIds: params.skipIds || [],
        },
        { indices: false },
      );

      const { data } = await this.http.get<Venue>(`/v1/venue?${query}`);

      return data;
    } catch (error) {
      return null;
    }
  }
}
