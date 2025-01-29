export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

export interface Experience {
  id: number;
  company: string;
  html_url: string;
  position: string;
  description: string;
  topics: string[];
  start_date: string;
  end_date: string;
}
