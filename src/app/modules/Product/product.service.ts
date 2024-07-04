import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// create new product service
const createProductService = async (product: IProduct) => {
  // create a new product
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

// get all products service
const getAllProductsService = async () => {
  const products = await ProductModel.find();
  return products;
};

// get product by id service
const getProductByIdService = async (id: string) => {
  const product = await ProductModel.findById(id);
  return product;
};

export const ProductServices = {
  createProductService,
  getAllProductsService,
  getProductByIdService,
};
