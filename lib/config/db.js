import mongoose from 'mongoose'


export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://bharatsblog:blog1234@cluster0.kxm5sya.mongodb.net/")
        console.log("DB Connected successfully");
    } catch (error) {
        console.log("Db connection error:"+error);
    }
}