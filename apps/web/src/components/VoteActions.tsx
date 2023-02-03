import { FunctionComponent } from "react";
import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";
import { useVoteActions } from "./useVoteActions";

const VoteActions_Voteable = graphql(`
  fragment VoteActions_Voteable on Voteable {
    userVote {
      type
    }
    ...UseVoteActions_Voteable
  }
`);

interface VoteActionsProps {
  voteable: FragmentType<typeof VoteActions_Voteable>;
}

export const VoteActions: FunctionComponent<VoteActionsProps> = ({
  voteable: voteableData,
}) => {
  const voteable = getFragmentData(VoteActions_Voteable, voteableData);
  const { voteUp, voteDown, voteAbusive, voteUnset } = useVoteActions(voteable);

  const vote = voteable.userVote?.type;

  return (
    <>
      <button onClick={() => (vote === "Up" ? voteUnset() : voteUp())}>
        👍 Up {vote === "Up" ? "(selected)" : null}
      </button>
      <br />
      <button onClick={() => (vote === "Down" ? voteUnset() : voteDown())}>
        👎 Down {vote === "Down" ? "(selected)" : null}
      </button>
      <br />
      <button
        onClick={() => (vote === "Abusive" ? voteUnset() : voteAbusive())}
      >
        ❌ Abusive {vote === "Abusive" ? "(selected)" : null}
      </button>
    </>
  );
};
