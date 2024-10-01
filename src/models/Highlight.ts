export interface Highlight {
  match_id: number;
  sport: string;
  match_type?: string; // Optional property for match type
  user?: string; // Optional property for user
  video_url: string;
  key_moments: KeyMoment[];
  statistics: Statistics;
}

export interface KeyMoment {
  time: number;
  description: string;
  start_time: number;
  end_time: number;
}

export interface Statistics {
  calories_burned: number;
  shot_accuracy: number;
}

export interface Match {
  match_id: number;
  sport: string;
  teams: Team[];
}

export interface Team {
  name: string;
  players: Player[];
  score: number;
}

export interface Player {
  name: string;
  statistics: Statistics;
}
