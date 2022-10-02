import { likes } from "./like.data";
import { DataSource } from "apollo-datasource";
import { LikeDocument, LikeSummary } from "./like.types";

export default class LikeableAPI extends DataSource {
  public async getSummaryById(likeableId: string): Promise<LikeSummary> {
    const _likes = likes.filter((like) => like.likeable === likeableId);
    const positiveLikes = _likes.filter((like) => like.type === "Like").length;
    const negativeLikes = _likes.filter((like) => like.type === "Dislike")
      .length;

    return {
      countLikes: positiveLikes,
      countDislikes: negativeLikes,
    };
  }

  public async getUserVote(
    likeableId: string,
    userId: string
  ): Promise<LikeDocument | null> {
    return (
      likes.find(
        (like) => like.likeable === likeableId && like.user === userId
      ) || null
    );
  }

  public async getLikablesFromUser(
    likeableType: string,
    userId: string,
    action: "Like" | "Dislike"
  ): Promise<string[]> {
    return likes
      .filter(
        (like) =>
          like.user === userId &&
          like.likeable.indexOf(likeableType + ":") === 0 &&
          like.type === action
      )
      .map((like) => like.likeable);
  }

  public async likeAdd(likeableId: string, userId: string): Promise<string> {
    const existingLike = likes.find(
      (like) => like.likeable === likeableId && like.user === userId
    );
    if (existingLike?.type === "Dislike") {
      existingLike.type = "Like";
    } else {
      likes.push({
        likeable: likeableId,
        user: userId,
        type: "Like",
      });
    }

    return likeableId;
  }

  public async likeDelete(likeableId: string, userId: string): Promise<string> {
    const existingIndex = likes.findIndex(
      (like) => like.likeable === likeableId && like.user === userId
    );
    if (existingIndex < 0) {
      throw new Error("TODO");
    }
    likes.splice(existingIndex, 1);
    return likeableId;
  }

  public async dislikeAdd(likeableId: string, userId: string): Promise<string> {
    const existingLike = likes.find(
      (like) => like.likeable === likeableId && like.user === userId
    );
    if (existingLike?.type === "Like") {
      existingLike.type = "Dislike";
    } else {
      likes.push({
        likeable: likeableId,
        user: userId,
        type: "Dislike",
      });
    }

    return likeableId;
  }

  public async dislikeDelete(
    likeableId: string,
    userId: string
  ): Promise<string> {
    const existingIndex = likes.findIndex(
      (like) => like.likeable === likeableId && like.user === userId
    );
    if (existingIndex < 0) {
      throw new Error("TODO");
    }
    likes.splice(existingIndex, 1);
    return likeableId;
  }
}
