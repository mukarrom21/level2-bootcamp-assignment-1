import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

// create new order service
const createOrderService = async (order: IOrder) => {
  // create a new order
  const newOrder = await OrderModel.create(order);
  return newOrder;
};

// get all orders service
const getAllOrdersService = async () => {
  const orders = await OrderModel.find();
  return orders;
};

// get order by id service
const getOrderByIdService = async (id: string) => {
  const order = await OrderModel.findById(id);
  return order;
};

// update order service
const updateOrderService = async (id: string, order: IOrder) => {
  const updatedOrder = await OrderModel.findByIdAndUpdate(id, order, {
    new: true,
  });
  return updatedOrder;
};

// delete order service
const deleteOrderService = async (id: string) => {
  const deletedOrder = await OrderModel.findByIdAndDelete(id);
  return deletedOrder;
};

export const OrderServices = {
  createOrderService,
  getAllOrdersService,
  getOrderByIdService,
  updateOrderService,
  deleteOrderService,
};
