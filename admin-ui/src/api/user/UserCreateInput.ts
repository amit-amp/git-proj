import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  customer?: CustomerWhereUniqueInput | null;
};
