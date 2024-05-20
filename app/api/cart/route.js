export const dynamic = 'force-dynamic' 
import Cart from "@/models/Cart";
import { User } from "@/models/User";
import connectMongo from "@/utils/db";

export async function POST(request) {
  try {
    await connectMongo();

    const body = await request.json();

    const email = body?.email;
    const productId = body.product_id;
    const quantity = body.quantity;

    const user = await User.findOne({ email: email });

    let cart = await Cart.findOne({ user: user._id });

    if (cart) {
      // cart exists for user
      let itemIndex = cart.cartItems.findIndex((p) => p.product == productId);

      if (itemIndex > -1) {
        // product exists in the cart, update the quantity
        let productItem = cart.cartItems[itemIndex];
        productItem.quantity = quantity;
        cart.cartItems[itemIndex] = productItem;
      } else {
        // product does not exists in cart, add new item
        cart.cartItems.push({ product: productId, quantity: quantity });
      }
      cart = await cart.save();
      return Response.json({
        status: 200,
        success: true,
        data: cart,
        message: "Cart updated successfully",
      });
    } else {
      // no cart for user, create new cart
      const newCart = await Cart.create({
        user: user._id,
        cartItems: [{ product: productId, quantity: quantity }],
      });

      return Response.json({
        status: 200,
        success: true,
        data: newCart,
        message: "Cart created successfully",
      });
    }
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
}


export async function GET(request) {
 try{
  await connectMongo();

  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("email");

  const user = await User.findOne({email: email });

  const cart = await Cart.findOne({user: user._id}).populate("cartItems").populate("cartItems.product");

  const data = cart.cartItems.map(item => ({
    // product: item.product,
    title:item?.product?.title,
    sku:item?.product?.sku,
    price: item?.product?.price,
    category: item?.product?.category,
    quantity: item.quantity,
  }));
  //console.log("data", data);

  return Response.json({
    status: 200,
    success: true,
    data: data,
    message: "Cart fetched successfully",
  });

 }catch(err){
   console.error(err);
   return Response.json({
     success: false,
     status: 500,
     message: "Internal Server Error",
     data: null,
   });
 }
}