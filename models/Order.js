import mongoose, { Schema } from "mongoose";

const  orderSchema = new Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  totalAmount: { type: Number, required: true },
  items: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      purchasedQty: {
        type: Number,
        required: true,
      },
    },
  ],
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "cancelled", "refund"],
    required: true,
    default: "pending",
  },
  order_status:{
    type: String,
    enum: ["ordered", "packed", "shipped", "delivered"],
    required: true,
    default: "ordered",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
},);

export const Order =
  mongoose.models.Order?? mongoose.model("Order", orderSchema);