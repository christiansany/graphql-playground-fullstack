export interface LikeDocument {
  likeable: string;
  user: string;
  type: "Like" | "Dislike";
}

export interface LikeSummary {
  countLikes: number;
  countDislikes: number;
}
