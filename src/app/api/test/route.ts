import { NextResponse } from "next/server";
import { connectMongo } from "../../../../utils/connectMongo";
import Input from "../../../../models/inputData";

export async function GET(request: Request) {
  console.log("Connecting to Mongo");
  await connectMongo();
  console.log("Connected to Mongo");
  try {
    const inputs = await Input.find({}); /* find all the data in our database */
    return NextResponse.json({ success: true, data: inputs });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
  // return new Response("Hello Test, Next.js!");
}

export async function POST(request: Request, response: Response) {
  console.log("POST:Connecting to Mongo");
  await connectMongo();
  console.log("POST:Connected to Mongo");
  try {
    console.log("Sending Data");
    // const input = await Input.create(
    //   request.body
    // ); /* create a new model in the database */
    console.log("Data Sent");
    console.log(request.body);
    return NextResponse.json({ success: true, data: request.body });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
  // return new Response("Hello Test Response, Next.js!");
}
