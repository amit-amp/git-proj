import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  nickname?: string | null;
  user?: UserWhereUniqueInput | null;
};
