import { FunctionComponent } from "react";
import {
  FragmentType,
  graphql,
  getFragmentData,
} from "../../__generated__/gql";

const LikeableInfo_Likeable = graphql(`
  fragment LikeableInfo_Likeable on Likeable {
    likeSummary {
      countLikes
      countDislikes
    }
    userLike {
      type
      user {
        id
        username
        email
      }
    }
  }
`);

interface LikeableInfoProps {
  likeable: FragmentType<typeof LikeableInfo_Likeable>;
}

export const LikeableInfo: FunctionComponent<LikeableInfoProps> = ({
  likeable: likeableData,
}) => {
  const likeable = getFragmentData(LikeableInfo_Likeable, likeableData);

  return (
    <>
      <h2>LikeableInfo</h2>
      <p>
        <strong>countLikes</strong>: {likeable.likeSummary.countLikes}
        <br />
        <strong>countDislikes</strong>: {likeable.likeSummary.countDislikes}
      </p>
      <p>
        <strong>userName</strong>: {likeable.userLike?.user?.username}
        <br />
        <strong>userEmail</strong>: {likeable.userLike?.user?.email}
        <br />
        <strong>userLike</strong>: {likeable.userLike?.type}
      </p>
    </>
  );
};
