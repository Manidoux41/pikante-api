import mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export async function main() {
  await mongoose
            .connect(`mongodb+srv://${process.env.MONGODB}@test-apis.chorlw4.mongodb.net/pikante?retryWrites=true&w=majority`, {
            useNewUrlParser: true
            })
            .then(console.log('Connected to database'))
            .catch(err => console.log('Failed to connect to the database' + err));
}