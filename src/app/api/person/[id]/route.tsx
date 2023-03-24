import connectMongo from "../../../../../utils/connectMongo";
import Input from "../../../../../models/inputData";
import { NextResponse } from "next/server";

console.log("Connecting to Mongo");
connectMongo();
console.log("Connected to Mongo");

export async function GET(request: Request, response: Response, { params }) {
  try {
    const id = params.id;
    const input = await Input.findById(id);
    if (!input) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({ success: true, value: input });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

export async function DELETE(request: Request, response: Response, { params }) {
  try {
    const id = params.id;
    const input = await Input.deleteOne({ _id: id });
    if (!input) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({ success: true, value: input });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
