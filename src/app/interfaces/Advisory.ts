export interface Advisory {
  id: number;
  created: number;
  owner: string;
  title: string;
  content: string;
  subject_id: number;
  tags: string[];
  messages?: number;
}

export interface AdvisoryMessage {
  id: number;
  created: number;
  owner: string;
  content: string;
  advisory_id: number;
  likes: number;
  nolikes: number;
}
