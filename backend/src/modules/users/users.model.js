import UserModel from "./users.schema.js";

export const getAllUsersModel = async () => {
  return UserModel.find({});
};

export const getByIdUsersModel = async (id) => {
  return UserModel.findById(id);
};

export const createUsersModel = async (body) => {
  return UserModel.create(body);
};

export const deleteByIdUsersModel = async (id) => {
  return UserModel.findByIdAndDelete(id);
};

export const updateByIdUsersModel = async (id, body) => {
  return UserModel.findByIdAndUpdate(id, { $set: body }, { new: true });
};
