import connectMongo from "@/utils/db";
import Address from "@/models/Address"; // Assuming you have an Address model

export async function POST(request) {
  try {
    const { userId, line1, line2, city, state, zipCode, country } = request.body;

    const newAddress = new Address({
      userId,
      line1,
      line2,
      city,
      state,
      zipCode,
      country
    });

    const savedAddress = await newAddress.save();

    return {
      success: true,
      status: 200,
      message: "Address added successfully",
      data: savedAddress,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    };
  }
}