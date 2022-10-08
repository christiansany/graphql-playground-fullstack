import { VoteDocument } from "./vote.types";

export const votes: VoteDocument[] = [
  {
    voteable: "product:1",
    user: "user:1",
    type: "Up",
  },
  {
    voteable: "product:2",
    user: "user:1",
    type: "Down",
  },
  {
    voteable: "product:3",
    user: "user:1",
    type: "Down",
  },
  {
    voteable: "product:4",
    user: "user:1",
    type: "Up",
  },
  {
    voteable: "product:1",
    user: "user:2",
    type: "Up",
  },
  {
    voteable: "product:1",
    user: "user:3",
    type: "Up",
  },
  {
    voteable: "product:1",
    user: "user:4",
    type: "Down",
  },
  {
    voteable: "brand:1",
    user: "user:1",
    type: "Up",
  },
  {
    voteable: "brand:2",
    user: "user:1",
    type: "Down",
  },
  {
    voteable: "brand:1",
    user: "user:2",
    type: "Up",
  },
];
