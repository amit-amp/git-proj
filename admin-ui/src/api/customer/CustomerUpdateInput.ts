import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  nickname?: string | null;
  user?: UserWhereUniqueInput | null;
};
