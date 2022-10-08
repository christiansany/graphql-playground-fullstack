import { votes } from "./vote.data";
import { DataSource } from "apollo-datasource";
import { VoteDocument, VotesSummary } from "./vote.types";

export default class VoteableAPI extends DataSource {
  public async getSummaryById(voteableId: string): Promise<VotesSummary> {
    const _votes = votes.filter((like) => like.voteable === voteableId);
    const countUp = _votes.filter((like) => like.type === "Up").length;
    const countDown = _votes.filter((like) => like.type === "Down").length;
    const countAbusive = _votes.filter((like) => like.type === "Abusive")
      .length;

    return {
      score: countUp - countDown,
      countUp: countUp,
      countDown: countDown,
      countAbusive: countAbusive,
    };
  }

  public async getUserVote(
    voteableId: string,
    userId: string
  ): Promise<VoteDocument | null> {
    return (
      votes.find(
        (vote) => vote.voteable === voteableId && vote.user === userId
      ) || null
    );
  }

  public async voteSet(
    voteableId: string,
    userId: string,
    action: VoteDocument["type"]
  ): Promise<string> {
    const existingVote = votes.find(
      (vote) => vote.voteable === voteableId && vote.user === userId
    );
    if (existingVote) {
      existingVote.type = action;
    } else {
      votes.push({
        voteable: voteableId,
        user: userId,
        type: action,
      });
    }
    return voteableId;
  }

  public async voteSetUp(voteableId: string, userId: string): Promise<string> {
    return this.voteSet(voteableId, userId, "Up");
  }

  public async voteSetDown(
    voteableId: string,
    userId: string
  ): Promise<string> {
    return this.voteSet(voteableId, userId, "Down");
  }

  public async voteSetAbusive(
    voteableId: string,
    userId: string
  ): Promise<string> {
    return this.voteSet(voteableId, userId, "Abusive");
  }

  public async voteUnset(voteableId: string, userId: string): Promise<string> {
    const existingIndex = votes.findIndex(
      (like) => like.voteable === voteableId && like.user === userId
    );
    if (existingIndex > -1) {
      votes.splice(existingIndex, 1);
    }
    return voteableId;
  }
}
