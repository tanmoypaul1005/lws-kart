const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({

user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

address:[
    {
        title: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
      },

      contact: {
        type: Number,
        required: true,
        trim: true,
      },
      postalCode: {
        type: String,
        required: true,
        trim: true,
      },

      address: {
        type: String,
        required: true,
        trim: true,
      },


      house_name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
      },
 
      address_type: {
        type: String,
        required: true,
        enum: ["shipping_address", "billing_address"],
        required: true,
      },
    }
]
},{timestamps:true});

export default mongoose.models.Address || mongoose.model('Address', addressSchema);