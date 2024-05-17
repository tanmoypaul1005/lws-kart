import { Product } from "@/models/Product";
import connectMongo from "@/utils/db";

export async function POST(request) {

    try {
        await connectMongo();

        const body= await request.json();
        if (!body?.productId || !body?.relatedProductId) {
          return Response.json({ success: false, status: 400, message: "Invalid Request", data: null });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
          body?.productId,
          { $push: { related_products: body?.relatedProductId } },
          { new: true }
        );
    
        return Response.json({ status: 200, success: true, data: updatedProduct, message: "Product updated successfully" });
      } catch (err) {
        console.error(err);
        return Response.json({ success: false, status: 500, message: "Internal Server Error", data: null });
      }
}