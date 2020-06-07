import Axios, { AxiosInstance } from 'axios';

export class CollaborationClient {
  private readonly http: AxiosInstance;

  constructor(serviceUrl: string) {
    this.http = Axios.create({
      baseURL: serviceUrl,
    });
  }

  async createInvite(userId: string) {
    const { data } = await this.http.post<{ code: string }>(
      '/v1/invite/create',
      { userId },
    );

    return data.code;
  }

  async applyInvite(userId: string, code: string) {
    await this.http.post('/v1/invite/apply', {
      code,
      userId,
    });
  }

  async createPublicationToken(userId: string) {
    const { data } = await this.http.post<{ token: string }>(
      '/v1/publication/token/create',
      { userId },
    );

    return data.token;
  }

  async moderate(
    approved: boolean,
    draftId: string,
    moderatorId: string,
  ): Promise<void> {
    await this.http.post('/v1/publication/draft/moderate', {
      approved,
      draftId,
      moderatorId,
    });
  }
}
