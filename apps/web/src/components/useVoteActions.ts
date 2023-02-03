import { useCallback, useMemo } from "react";
import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";
import { useMutation } from "@apollo/client";
import { VoteSetHookFragment_VotableFragment } from "../../__generated__/gql/graphql";
import { GraphQLError } from "graphql";

// Necessary data from outside to perform the actions
const UseVoteActions_Voteable = graphql(`
  fragment UseVoteActions_Voteable on Voteable {
    id
  }
`);

// Fragment containing all the data we need to update the cache
const VoteSetHookFragment_Votable = graphql(`
  fragment VoteSetHookFragment_Votable on Voteable {
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
        ...VoteSetHookFragment_Votable
      }
    }
  }
`);

const VoteSetDown = graphql(`
  mutation VoteSetDown($id: ID!) {
    voteSetDown(id: $id) {
      voteable {
        ...VoteSetHookFragment_Votable
      }
    }
  }
`);

const VoteSetAbusive = graphql(`
  mutation VoteSetAbusive($id: ID!) {
    voteSetAbusive(id: $id) {
      voteable {
        ...VoteSetHookFragment_Votable
      }
    }
  }
`);

const VoteUnset = graphql(`
  mutation VoteUnset($id: ID!) {
    voteUnset(id: $id) {
      voteable {
        ...VoteSetHookFragment_Votable
      }
    }
  }
`);

// TODO: Use optimistic returns for updating the cahce instantly
// TODO: Use error handling for displaying errors
// TOOD: Maybe enable the hook to provide callback functions as well?
//   callbacks: onVoteUp, onVoteDown, onVoteAbusive, onVoteUnset
//   and error callbacks: onErrorVoteUp, onErrorVoteDown, onErrorVoteAbusive,
//   onErrorVoteUnset and a generic onError

interface UseVoteActionsOptions {
  onVoteUp?: (votable: VoteSetHookFragment_VotableFragment) => void;
  onVoteUpError?: (errors: readonly GraphQLError[]) => void;
}

export const useVoteActions = (
  voteableData: FragmentType<typeof UseVoteActions_Voteable>,
  { onVoteUp, onVoteUpError }: UseVoteActionsOptions = {}
) => {
  const voteable = getFragmentData(UseVoteActions_Voteable, voteableData);
  const options = {
    variables: {
      id: voteable.id,
    },
  };
  const [voteUpMutation, { error: voteUpError }] = useMutation(
    VoteSetUp,
    options
  );
  const [voteDown, { error: voteDownError }] = useMutation(
    VoteSetDown,
    options
  );
  const [voteAbusive, { error: voteAbusiveError }] = useMutation(
    VoteSetAbusive,
    options
  );
  const [voteUnset, { error: voteUnsetError }] = useMutation(
    VoteUnset,
    options
  );

  // TODO: Enable options and NOT variables to be provided to this function
  const voteUp = useCallback(async () => {
    const response = await voteUpMutation();
    const { data, errors } = response;
    if (!errors && data?.voteSetUp.voteable && onVoteUp) {
      const voteable = getFragmentData(
        VoteSetHookFragment_Votable,
        data?.voteSetUp.voteable
      );
      onVoteUp(voteable);
    } else if (errors && onVoteUpError) {
      onVoteUpError(errors);
    }
    return response;
  }, [voteUpMutation, onVoteUp, onVoteUpError]);

  return useMemo(
    () => ({
      voteUp,
      voteDown,
      voteAbusive,
      voteUnset,
      voteUpError,
      voteDownError,
      voteAbusiveError,
      voteUnsetError,
    }),
    [
      voteUp,
      voteDown,
      voteAbusive,
      voteUnset,
      voteUpError,
      voteDownError,
      voteAbusiveError,
      voteUnsetError,
    ]
  );
};
