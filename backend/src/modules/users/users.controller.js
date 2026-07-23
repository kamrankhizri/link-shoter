import {
  getAllUsersModel,
  getByIdUsersModel,
  createUsersModel,
  updateByIdUsersModel,
  deleteByIdUsersModel
} from "./users.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await getAllUsersModel();
    res.status(200).json({ message: "Data retrieved successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data", error: err.message });
  }
};

export const getByIdUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getByIdUsersModel(id);
    res.status(200).json({ message: "Data retrieved successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving data", error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const body = req.body;
    const data = await createUsersModel(body);
    res.status(201).json({ message: "Data created successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error creating data", error: err.message });
  }
};

export const updateByIdUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await updateByIdUsersModel(id, body);
    res.status(200).json({ message: "Data updated successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error updating data", error: err.message });
  }
};

export const deleteByIdUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await deleteByIdUsersModel(id);
    res.status(200).json({ message: "Data deleted successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Error deleting data", error: err.message });
  }
};
