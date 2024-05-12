import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
  
  title: {
    required: true,
    type: String
  },
  brand: {
    required: true,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  sku: {
    required: false,
    type: String
  },
  price: {
    required: false,
    type: Number
  },
  sku: {
    required: false,
    type: String
  },
  quantity:{
    required: false,
    type: Number
  },
  description :{
    required: false,
    type: String
  },
  long_description :{
    required: false,
    type: String
  },
  images: {
    required: false,
    type: [String]
  }
  
});


export const Product = mongoose.models.Product ?? mongoose.model("Product", productSchema);