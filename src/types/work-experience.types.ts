export type WorkExperienceType = {
  id: number;

  slug: string;

  position: string;
  description: string;

  company: string;
  location: string;

  from_date: string;
  to_date: string;

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
};
