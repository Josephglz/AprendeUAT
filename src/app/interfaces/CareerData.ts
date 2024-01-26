export interface CareerData {
  id: number;
  name: string;
  abreviation: string;
}

export interface SubjectData {
  id: number;
  name: string;
  career_id: number;
}
