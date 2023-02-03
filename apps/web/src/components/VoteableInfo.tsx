import { FunctionComponent } from "react";
import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";

const VoteableInfo_Voteable = graphql(`
  fragment VoteableInfo_Voteable on Voteable {
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
        username
        email
      }
    }
  }
`);

interface VoteableInfoProps {
  voteable: FragmentType<typeof VoteableInfo_Voteable>;
}

export const VoteableInfo: FunctionComponent<VoteableInfoProps> = ({
  voteable: voteableData,
}) => {
  const voteable = getFragmentData(VoteableInfo_Voteable, voteableData);

  return (
    <>
      <h2>VoteableInfo</h2>
      <p>
        <strong>score</strong>: {voteable.votesSummary.score}
        <br />
        <strong>countUp</strong>: {voteable.votesSummary.countUp}
        <br />
        <strong>countDown</strong>: {voteable.votesSummary.countDown}
        <br />
        <strong>countAbusive</strong>: {voteable.votesSummary.countAbusive}
      </p>
      <p>
        <strong>userName</strong>: {voteable.userVote?.user?.username}
        <br />
        <strong>userEmail</strong>: {voteable.userVote?.user?.email}
        <br />
        <strong>userVote</strong>: {voteable.userVote?.type}
      </p>
    </>
  );
};
