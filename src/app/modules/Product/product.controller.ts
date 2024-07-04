import catchAsync from "../../utils/catchAsync";
import { ProductServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import { IProduct } from "./product.interface";

// create new product controller
const createProductController = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await ProductServices.createProductService(productData);

  // send response
  sendResponse<IProduct>(res, {
    statusCode: 201,
    success: true,
    message: "Product created successfully!",
    data: result,
  });
});

// get all products controller
const getAllProductsController = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsService();

  // send response
  sendResponse<IProduct[]>(res, {
    statusCode: 200,
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
});

// get product by id controller
const getProductByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getProductByIdService(id);

  // send response
  sendResponse<IProduct | null>(res, {
    statusCode: 200,
    success: true,
    message: "Product fetched successfully!",
    data: result,
  });
});

export const ProductControllers = {
  createProductController,
  getAllProductsController,
  getProductByIdController,
};
