import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// App Routes
// import UsersRoutes from "./src/modules/users/users.routes.js";
// import CartRoutes from "./src/modules/cart/cart.routes.js";
// import FavoriteRoutes from "./src/modules/favorate/favorate.routes.js";
// import OrderRoutes from "./src/modules/order/order.routes.js";
import ProductsRoutes from "./src/modules/product/product.routes.js";
// import reviewRoutes from "./src/modules/rewiew/review.routes.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection error:", err.message);
//   });
    






let isConnected = false;

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}




app.use((req, res, next) => {
  if (!isConnected) {
    connectToMongoDB();
  }
  next();
});




// Routes
app.use("/items", ProductsRoutes);

// Start Server
// app.listen(port, () => {
//   console.log(`✅ Server is running on port ${port} 🚀`);
// });

module.exports =app