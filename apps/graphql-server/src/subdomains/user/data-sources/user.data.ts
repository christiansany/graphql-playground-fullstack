import { UserDocument, UserDocumentIndex } from "./user.types";

const table = "user";

export const users: UserDocument[] = [
  {
    id: `${table}:1`,
    username: "username1",
    email: "mail1@foobar.com",
  },
  {
    id: `${table}:2`,
    username: "username2",
    email: "mail2@foobar.com",
  },
  {
    id: `${table}:3`,
    username: "username3",
    email: "mail3@foobar.com",
  },
  {
    id: `${table}:4`,
    username: "username4",
    email: "mail4@foobar.com",
  },
];

export const userIndex = () =>
  users.reduce<UserDocumentIndex>((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
