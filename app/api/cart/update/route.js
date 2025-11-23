import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request) {
  try {
    // Read and extract the userId from Clerk authentication
    const { userId } = getAuth(request);

    // Read the JSON body sent from the frontend
    const { cartData } = await request.json();

    // Connect to MongoDB
    await connectDB();
    //Find the user by their ID
    const user = await User.findById(userId);

    // Update the user's cart items and Save the updated user in the database
    user.cartItems = cartData;
    await user.save();

    // Send a success response back to the frontend
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
