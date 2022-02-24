import productModel from '../models/productModel';
import ProductInterface from '../interfaces/productInterface';
import ErrorInterface from '../interfaces/errorInterface';
import productSchema from '../schemas/productSchema';

const validateProduct = (Product: ProductInterface) => {
  const { error } = productSchema.validate(Product);

  if (error) {
    const err: ErrorInterface = error;
    err.status = err.message.includes('required') ? 400 : 422;
    throw err;
  }
};

const create = async (product: ProductInterface) => {
  validateProduct(product);
  const createproduct = await productModel.create(product);
  console.log('CREATE PRODUCT --->', createproduct.insertId);
  return {
    item: {
      id: createproduct.insertId,
      name: product.name,
      amount: product.amount,
    },
  };
};

export default {
  create,
};
