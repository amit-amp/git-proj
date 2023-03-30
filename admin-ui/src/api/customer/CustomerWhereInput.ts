import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerWhereInput = {
  id?: StringFilter;
  nickname?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
