export interface ProjectType {
  id: number,
  title: string,
  slug: string,
  summary: string,
  technolgoies: string[],
  timeline: string,
  title: string
}

export interface SectionType {
  content: string,
  id: number,
  media_urls: string[],
  order: number,
  section_type: string,
  title: string
}

export interface MetricType {
  id: number,
  value: string,
  label: string,
  order: number
}

export interface CaseStudyType {
  category: string,
  description: string,
  hero_image: string,
  id: number,
  metrics: MetricType[],
  project: ProjectType,
  sections: SectionType[]
  slug: string,
  title: string
}

export interface ResumeType {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  file_url: string;
  published: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  experiences: ExperienceType[];
  skill_categories: SkillCategoryType[];
  education: EducationType[];
}

export interface ExperienceType {
  id: number;
  company_name: string;
  job_title: string;
  start_date: string; // ISO date string (YYYY-MM-DD)
  end_date: string | null; // Can be null for current positions
  order: number;
  bullets: BulletType[];
}

export interface BulletType {
  id: number;
  content: string; // Rich text/HTML content
  order: number;
}

export interface SkillCategoryType {
  id: number;
  name: string;
  order: number;
  skills: SkillType[];
}

export interface SkillType {
  id: number;
  name: string;
  order: number;
}

export interface EducationType {
  id: number;
  title: string;
  subtitle: string;
  order: number;
}