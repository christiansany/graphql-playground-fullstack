import { LikeDocument } from "./like.types";

export const likes: LikeDocument[] = [
  {
    likeable: "product:1",
    user: "user:1",
    type: "Like",
  },
  {
    likeable: "product:2",
    user: "user:1",
    type: "Dislike",
  },
  {
    likeable: "product:3",
    user: "user:1",
    type: "Dislike",
  },
  {
    likeable: "product:4",
    user: "user:1",
    type: "Like",
  },
  {
    likeable: "product:1",
    user: "user:2",
    type: "Like",
  },
  {
    likeable: "product:1",
    user: "user:3",
    type: "Like",
  },
  {
    likeable: "product:1",
    user: "user:4",
    type: "Dislike",
  },
  {
    likeable: "brand:1",
    user: "user:1",
    type: "Like",
  },
  {
    likeable: "brand:2",
    user: "user:1",
    type: "Dislike",
  },
  {
    likeable: "brand:1",
    user: "user:2",
    type: "Like",
  },
];
