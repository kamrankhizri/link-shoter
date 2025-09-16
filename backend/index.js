// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ MongoDB connect
mongoose.connect("mongodb+srv://kamrankhizri4749:125@cluster0.3jksbr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// ✅ Schema & Model
const urlSchema = new mongoose.Schema({
  shortId: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Url = mongoose.model("Url", urlSchema);

// ✅ Route: Shorten URL
app.post("/shorten", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required!" });
  }

  // Pehle check karo agar URL pehle se hai
  let existing = await Url.findOne({ originalUrl: url });
  if (existing) {
    return res.json({ shortUrl: `http://localhost:${PORT}/${existing.shortId}` });
  }

  // Naya short ID banao
  const shortId = nanoid(6);
  const newUrl = new Url({ shortId, originalUrl: url });
  await newUrl.save();

  res.json({ shortUrl: `http://localhost:${PORT}/${shortId}` });
});

// ✅ Route: Redirect
app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const entry = await Url.findOne({ shortId });

  if (entry) {
    return res.redirect(entry.originalUrl);
  } else {
    return res.status(404).send("❌ Link not found!");
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});




//3 Different Frontends (same backend se connect)

// Version 1: Glassmorphism Dark (React + Tailwind + GSAP animations)

// Version 2: Neon Cyberpunk (HTML + CSS + JS, glowing neon style)

// Version 3: Minimal Fade Dark (Vue.js + Tailwind, smooth fade transitions)

// Functionality (sab me same):

// Ek input field jahan user long URL (like Google) paste kare.

// Ek button “Shorten” → backend /shorten API call kare.

// Short link generate hoke user ko show ho (clickable).

// Jab user short link pe click kare → wo backend ke redirect route se original site khol de.

// Design Specifics:

// Glassmorphism: blur, frosted glass effect, soft shadows.

// Cyberpunk Neon: glowing neon colors (purple, pink, blue), pulse animation.

// Minimal Fade: simple UI, elegant fade-in/fade-out transitions.

//Dark Theme Only

// Har version me dark mode by default hoga (no light theme).
///Smooth transitions, hover effects, fade/scale animations.

// Different CSS styles for each frontend version.