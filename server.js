import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import { main } from "./config/dbConfig.js";

dotenv.config({ path: "./config/.env" });

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (!err) {
    main();
    console.log(`Server running on port: ${PORT}`);
  }
});
