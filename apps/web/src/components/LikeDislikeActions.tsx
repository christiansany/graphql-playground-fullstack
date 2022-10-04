import { FunctionComponent } from "react";
import { FragmentType, graphql, useFragment } from "../../__generated__/gql";
import { useMutation } from "@apollo/client";

const LikeDislikeActions_Likeable = graphql(`
  fragment LikeDislikeActions_Likeable on Likeable {
    id
    likeSummary {
      countLikes
      countDislikes
    }
    userLike {
      type
    }
  }
`);

const LikeAdd = graphql(`
  mutation LikeAdd($id: ID!) {
    likeAdd(id: $id) {
      likable {
        ...LikeDislikeActions_Likeable
      }
    }
  }
`);

const LikeDelete = graphql(`
  mutation LikeDelete($id: ID!) {
    likeDelete(id: $id) {
      likable {
        ...LikeDislikeActions_Likeable
      }
    }
  }
`);

const DislikeAdd = graphql(`
  mutation DislikeAdd($id: ID!) {
    dislikeAdd(id: $id) {
      likable {
        ...LikeDislikeActions_Likeable
      }
    }
  }
`);

const DislikeDelete = graphql(`
  mutation DislikeDelete($id: ID!) {
    dislikeDelete(id: $id) {
      likable {
        ...LikeDislikeActions_Likeable
      }
    }
  }
`);

interface LikeDislikeActionsProps {
  likeable: FragmentType<typeof LikeDislikeActions_Likeable>;
}

export const LikeDislikeActions: FunctionComponent<LikeDislikeActionsProps> = ({
  likeable: likeableData,
}) => {
  const likeable = useFragment(LikeDislikeActions_Likeable, likeableData);
  const options = {
    variables: {
      id: likeable.id,
    },
  };
  const [likeAdd] = useMutation(LikeAdd, options);
  const [likeDelete] = useMutation(LikeDelete, options);
  const [dislikeAdd] = useMutation(DislikeAdd, options);
  const [dislikeDelete] = useMutation(DislikeDelete, options);

  return (
    <>
      <button
        onClick={
          likeable.userLike?.type !== "Like"
            ? () => likeAdd()
            : () => likeDelete()
        }
      >
        👍 Like {likeable.userLike?.type === "Like" ? "(selected)" : null}{" "}
        (count: {likeable.likeSummary.countLikes})
      </button>
      <br />
      <button
        onClick={
          likeable.userLike?.type !== "Dislike"
            ? () => dislikeAdd()
            : () => dislikeDelete()
        }
      >
        👎 Dislike {likeable.userLike?.type === "Dislike" ? "(selected)" : null}{" "}
        (count: {likeable.likeSummary.countDislikes})
      </button>
    </>
  );
};
