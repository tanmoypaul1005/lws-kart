export const dynamic = 'force-dynamic' 
import { Product } from "@/models/Product";
import connectMongo from "@/utils/db";

export async function GET(request,{params}) {

    try {
        await connectMongo();
        
        if (params.product_id) {
            let products = await Product.findOne({ _id: params.product_id }).populate('related_products');
            return Response.json({success:true, status: 200, data: products, message: `${products?.name} is Found` });
        } else {
            return Response.json({ success:false,status: 404, error: 'No product found', message: "No movie found with the provided id" });
        }
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
}
