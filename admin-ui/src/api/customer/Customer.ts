import { User } from "../user/User";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nickname: string | null;
  user?: User | null;
};
