import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: false,
      min: 1,
    },
    originalPrice: {
      type: Number,
      required: false,
      min: 0,
    },
    salePrice: {
      type: Number,
      default: null,
      min: 0,
      // Converts empty string from frontend input to null
      set: (val) => (val === "" ? null : val),
    },
    is_available: {
      type: String,
      enum: ["Available", "Not available"],
      default: "Available",
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;