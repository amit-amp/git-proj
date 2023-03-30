import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  num?: string | null;
  user?: UserWhereUniqueInput | null;
};
