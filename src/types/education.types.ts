export type EducationType = {
  id: number;

  slug: string;

  major: string;

  university_name?: string;
  university_full_name?: string;

  from_date?: string;
  to_date?: string;

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
};
