import { Venue } from './EatClient.types';

export type DraftFields = Omit<Venue, 'id' | 'authorId'>;

export interface Draft {
  id: string;

  fields: DraftFields;

  approved: boolean;

  moderated: boolean;

  authorId: string;

  moderatorId?: string;
}
