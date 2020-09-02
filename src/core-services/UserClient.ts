import Axios, { AxiosInstance } from 'axios';

import { SignUpResponse, CountResponse } from './UserClient.types';

export class UserClient {
  private readonly http: AxiosInstance;

  constructor(serviceUrl: string) {
    this.http = Axios.create({
      baseURL: serviceUrl,
    });
  }

  async signUp(): Promise<string> {
    const { data } = await this.http.post<SignUpResponse>('/v1/sign-up', {});

    return data.id;
  }
}
