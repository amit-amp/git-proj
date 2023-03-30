import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "num";

export const OrderTitle = (record: TOrder): string => {
  return record.num || String(record.id);
};
