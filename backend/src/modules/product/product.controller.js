import {
  getAllProductsModel,
  getByIdProductsModel,
  createProductsModel,
  updateByIdProductsModel,
  deleteByIdProductsModel
} from "./product.model.js";

export const   getAllProduct = async (req, res) => {
  try {
    const data = await getAllProductsModel();
    res.status(200).json({ message: "Data retrieved successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data", error: err.message });
  }
};

export const   getByIdProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getByIdProductsModel(id);
    res.status(200).json({ message: "Data retrieved successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data", error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const body = req.body;
    const data = await createProductsModel(body);
    res.status(201).json({ message: "Data created successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error creating data", error: err.message });
  }
};

export const updateByIdProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await updateByIdProductsModel(id, body);
    res.status(200).json({ message: "Data updated successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error updating data", error: err.message });
  }
};

export const deleteByIdProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteByIdProductsModel(id);
    res.status(200).json({ message: "Data deleted successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error deleting data", error: err.message });
  }
};
