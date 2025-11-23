import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Product from "@/models/product";

export async function GET(request) {
  try {
    await connectDB();

    const products = await Product.find({});

    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
// logic of this api :
//      1. connect to database
//      2. find all product
//      3. send all product to the response
