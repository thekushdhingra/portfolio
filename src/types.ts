type Attachment = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    full: { url: string; width: number; height: number };
  };
};

type ProjectFields = {
  Name: string;
  Attachments: Attachment[];
  "Github URL"?: string;
  "Project URL"?: string;
  Description: string;
  Featured: boolean;
};

type Project = {
  id: string;
  createdTime: string;
  fields: ProjectFields;
};

export type { Project as ProjectType };

type Stats = {
  waka: {
    username: string;
    user_id: string;
    is_coding_activity_visible: boolean;
    is_other_usage_visible: boolean;
    status: string;
    start: string;
    end: string;
    range: string;
    human_readable_range: string;
    total_seconds: number;
    daily_average: number;
    human_readable_total: string;
    human_readable_daily_average: string;
    languages: Array<{
      name: string;
      total_seconds: number;
      text: string;
      hours: number;
      minutes: number;
      percent: number;
      digital: string;
    }>;
  };
};

export type { Stats as StatsType };
