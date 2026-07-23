import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_no: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: {
    country: { type: String },
    city: { type: String },
    state: { type: String },
    local_address: { type: String },
  },
});


const UserModel = mongoose.model("Users", userSchema);

export default UserModel;
