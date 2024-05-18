import mongoose, { Schema } from "mongoose";

const  orderSchema = new Schema(  {
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // Address: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Address",
  //   required: true,
  // },
  totalAmount: { type: Number, required: true },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      payablePrice: {
        type: Number,
        required: true,
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
  },
  paymentType: {
    type: String,
    enum: ["cash", "card","bkash"],
    required: true,
  },
  orderStatus: [
    {
      type: {
        type: String,
        enum: ["ordered", "packed", "shipped", "delivered"],
        default: "ordered",
      },
      date: {
        type: Date,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
  ],
},);

export const Order =
  mongoose.models.Order?? mongoose.model("Order", orderSchema);