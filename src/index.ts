import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import highlightRoutes from "./routes/highlights";

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/highlight", highlightRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
