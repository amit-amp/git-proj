import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  orders?: OrderUpdateManyWithoutUsersInput;
  customer?: CustomerWhereUniqueInput | null;
};
