import connectMongo from "@/utils/db";
import Address from "@/models/Address"; // Assuming you have an Address model
import { User } from "@/models/User";

export async function POST(request) {
  try {
    await connectMongo();

    const body = await request.json();

    const email = body?.email;
    const title = body.title;
    const contact=body.contact
    const postalCode=body.postalCode
    const address=body.address
    const house_name=body.house_name
    const address_type=body.address_type

    const user_info= await User.findOne({ email: email });

    const user = user_info._id;

    // Find the user's address document
    let userAddress = await Address.findOne({ user: user_info._id });

    // If the user doesn't have an address document, create a new one
    if (!userAddress) {
      userAddress = new Address({ user, address: [] });
    }

    // Add the new address to the address array
    userAddress.address.push({ title, contact, postalCode, address, house_name, address_type });

    // Save the updated address document
    const savedAddress = await userAddress.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Address added successfully",
      data: savedAddress,
    });
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