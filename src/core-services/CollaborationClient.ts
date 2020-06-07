import Axios, { AxiosInstance } from 'axios';

export class CollaborationClient {
  private readonly http: AxiosInstance;

  constructor(serviceUrl: string) {
    this.http = Axios.create({
      baseURL: serviceUrl,
    });
  }

  async moderate(
    approved: true,
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
