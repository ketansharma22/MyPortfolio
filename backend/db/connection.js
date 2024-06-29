import { connect } from 'mongoose'
import { config } from 'dotenv'
config()
export const connectToDatabse = async() => {
  try{
    await connect("mongodb+srv://kanu220504:BlQwYPl2CNQoUGOy@portfolio.zgipz4v.mongodb.net/?retryWrites=true&w=majority&appName=portfolio")
    console.log("db connected");
  }
  catch(error){
    console.log(error);
    throw new Error("cannot connect to database")
  }
}

