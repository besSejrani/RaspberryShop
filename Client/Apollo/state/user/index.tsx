import { makeVar } from "@apollo/client";

const initialState = {
  _id: "",
  username: "",
  role: "user",
};

type User = {
  _id: string;
  username: string;
  role: string;
};

export const user = makeVar<User>(initialState);