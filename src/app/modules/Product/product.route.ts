import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductsValidationSchema } from "./product.validate";
import { ProductControllers } from "./product.controller";

const router = Router();

router.post(
  "/create",
  validateRequest(ProductsValidationSchema.createNewProductSchema),
  ProductControllers.createProductController,
);

// get all products route
router.get("/", ProductControllers.getAllProductsController);

// get product by id route
router.get("/:id", ProductControllers.getProductByIdController);

export const ProductRoutes = router;
