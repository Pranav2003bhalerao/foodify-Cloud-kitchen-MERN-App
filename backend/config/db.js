import mongoose from "mongoose";

export const connectDb= async() => {
    await mongoose.connect('mongodb+srv://pranav2003bhalerao:Pr1n1vbh1ler1o@cluster0.z4oih.mongodb.net/food-delivery-app').then(()=>console.log("DB Connected"));
}