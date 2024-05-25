import { getAllProducts, createProduct, createTypeProduct, UpdateProduct, DeleteProduct, GetProductById } from "../controller/product";
import { productSchema } from "../validation/product";

export const getProduct = async () => {
  const { products, success } = await getAllProducts();
  if (success) {
    return {
      products,
      statusCode: 200,
    };
  } else {
    return {
      products,
      statusCode: 500,
    };
  }
};
export const getProductByid = async (id: string) => {
  const { product, success } = await GetProductById(id);
  if (success) {
    return {
      product,
      statusCode: 200,
    };
  } else {
    return {
      product,
      statusCode: 500,
    };
  }
};

export const addProduct = async (result: createTypeProduct) => {
  const { error } = productSchema.validate(result);
  if (!error) {
    const { product, success } = await createProduct(result);
    if (success) {
      return {
        statusCode: 200,
        error: null,
        product,
      };
    } else {
      return {
        statusCode: 500,
        error: "database error",
        product,
      };
    }
  } else {
    return {
      statusCode: 400,
      product: null,
      error: error.details[0].message,
    };
  }
};

export const updateProduct = async (id: string, value: any) => {
  const { product, statusCode, message } = await UpdateProduct(id, value);
  if (statusCode === 200) {
    return {
      statusCode: 200,
      product,
      message: "update success",
    };
  } else if (statusCode === 404) {
    return {
      statusCode: 400,
      product: null,
      message,
    };
  } else {
    return {
      statusCode: 500,
      product: null,
      message,
    };
  }
};
export const deleteProduct = async (id: string) => {
  const { product, statusCode, message } = await DeleteProduct(id);
  if (statusCode === 200) {
    return {
      statusCode: 200,
      product,
      message: "delete success",
    };
  } else if (statusCode === 404) {
    return {
      statusCode: 400,
      product: null,
      message,
    };
  } else {
    return {
      statusCode: 500,
      product: null,
      message,
    };
  }
};
