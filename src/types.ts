export interface Repo {
  id: number;
  name: string;
  github_url: string;
  website_url: string;
  description: string;
  created_at: string;
  stars: number;
  forks: number;
  preview_url?: string;
  preview_type?: "image" | "video";
}
