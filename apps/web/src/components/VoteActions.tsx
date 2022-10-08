import { FunctionComponent } from "react";
import { FragmentType, graphql, useFragment } from "../../__generated__/gql";
import { useMutation } from "@apollo/client";

const VoteActions_Voteable = graphql(`
  fragment VoteActions_Voteable on Voteable {
    id
    votesSummary {
      score
      countUp
      countDown
      countAbusive
    }
    userVote {
      type
      user {
        id
      }
    }
  }
`);

const VoteSetUp = graphql(`
  mutation VoteSetUp($id: ID!) {
    voteSetUp(id: $id) {
      voteable {
        ...VoteActions_Voteable
      }
    }
  }
`);

const VoteSetDown = graphql(`
  mutation VoteSetDown($id: ID!) {
    voteSetDown(id: $id) {
      voteable {
        ...VoteActions_Voteable
      }
    }
  }
`);

const VoteSetAbusive = graphql(`
  mutation VoteSetAbusive($id: ID!) {
    voteSetAbusive(id: $id) {
      voteable {
        ...VoteActions_Voteable
      }
    }
  }
`);

const VoteUnset = graphql(`
  mutation VoteUnset($id: ID!) {
    voteUnset(id: $id) {
      voteable {
        ...VoteActions_Voteable
      }
    }
  }
`);

interface VoteActionsProps {
  voteable: FragmentType<typeof VoteActions_Voteable>;
}

export const VoteActions: FunctionComponent<VoteActionsProps> = ({
  voteable: voteableData,
}) => {
  const voteable = useFragment(VoteActions_Voteable, voteableData);
  const options = {
    variables: {
      id: voteable.id,
    },
  };
  const [voteSetUp] = useMutation(VoteSetUp, options);
  const [voteSetDown] = useMutation(VoteSetDown, options);
  const [voteSetAbusive] = useMutation(VoteSetAbusive, options);
  const [voteUnset] = useMutation(VoteUnset, options);

  const vote = voteable.userVote?.type;

  return (
    <>
      <button onClick={() => (vote === "Up" ? voteUnset() : voteSetUp())}>
        👍 Up {vote === "Up" ? "(selected)" : null}
      </button>
      <br />
      <button onClick={() => (vote === "Down" ? voteUnset() : voteSetDown())}>
        👎 Down {vote === "Down" ? "(selected)" : null}
      </button>
      <br />
      <button
        onClick={() => (vote === "Abusive" ? voteUnset() : voteSetAbusive())}
      >
        ❌ Abusive {vote === "Abusive" ? "(selected)" : null}
      </button>
    </>
  );
};
