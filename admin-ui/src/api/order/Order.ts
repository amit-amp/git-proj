import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  num: string | null;
  user?: User | null;
};
