import ProductModel from "./product.schema.js";

export const getAllProductsModel = async () => {
  return ProductModel.find({});
};

export const getByIdProductsModel = async (id) => {
  return ProductModel.findById(id);
};

export const createProductsModel = async (body) => {
  return ProductModel.create(body);
};

export const deleteByIdProductsModel = async (id) => {
  return ProductModel.findByIdAndDelete(id);
};

export const updateByIdProductsModel = async (id, body) => {
  return ProductModel.findByIdAndUpdate(id, { $set: body }, { new: true });
};
