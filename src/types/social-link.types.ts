export type SocialLinkType = {
  id: number;

  platform: string;
  url: string;

  handle: string;

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
};
