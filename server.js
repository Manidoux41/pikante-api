import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config/.env" });

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
const PORT = process.env.PORT || 3001;

connectDB();

async function connectDB(){
  await mongoose
  .connect(`mongodb+srv://${process.env.MONGODB}@test-apis.chorlw4.mongodb.net/${process.env.MONGODB_DATANAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  })
  .then(() =>{
    app.listen(PORT, () => console.log(`connect to db successfull and listening on port: ${PORT}`))
  })
  .catch(err => console.log('Failed to connect DB'))  
}










