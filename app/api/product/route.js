
import { Product } from "@/models/Product";
import { products_type } from "@/utils/const";
import connectMongo from "@/utils/db";
export const dynamic = 'force-dynamic' 

export async function GET(request) {
    try {
        await connectMongo();
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("category");
        let products = [];
        if (products_type.includes(query)) {
          products = await Product.find({ category: query });
        }
        else if (query === null) {
          products = await Product.find({});
        }
        else {
          return Response.json({ success: false, status: 400, message: "Invalid Category", data: null });
        }
    
        // products = await Promise.all(products.map(async (product) => {
        //   const category = await Category.findOne({ _id: product.category });
        //   if (category) {
        //     product.category = category;
        //   }
        //   return product;
        // }));
        
        return Response.json({ status: 200, success: true, data: products, message: "Product is Found" });
      } catch (err) {
        console.error(err);
        return Response.json({ success: false, status: 500, message: "Internal Server Error", data: null });
      }
    
}