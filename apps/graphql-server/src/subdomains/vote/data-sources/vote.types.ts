export interface VoteDocument {
  voteable: string;
  user: string;
  type: "Up" | "Down" | "Abusive";
}

export interface VotesSummary {
  score: number;
  countUp: number;
  countDown: number;
  countAbusive: number;
}
