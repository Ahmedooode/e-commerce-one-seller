import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    await connectDB();
    const user = await User.findById(userId);

    const { cartItems } = user;

    return NextResponse.json({ success: true, cartItems });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
// logic of this api :
// 1. Get the user ID from Clerk Authentication
// 2. Connect to the MongoDB database
// 3. Find the user document in the database using the user ID
// 4. Extract the cartItems from the user document
// 5. Return the cartItems in the response as JSON to the frontend
