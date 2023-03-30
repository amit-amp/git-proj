import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  num?: string | null;
  user?: UserWhereUniqueInput | null;
};
