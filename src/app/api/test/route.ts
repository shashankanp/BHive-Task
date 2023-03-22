import { NextResponse } from "next/server";
import { connectMongo } from "../../../../utils/connectMongo";
import Input from "../../../../models/inputData";

// export async function POST(request: Request) {
//     // console.log("Connecting to Mongo");
//     // await connectMongo();
//     // console.log("Connected to Mongo");

//     // console.log("Creating Document");
//     // const input=await Input.create(request.body)
//     // console.log("Created Document");

//     // NextResponse.json({Input})
//     return NextResponse.json({id:24,name:'Goodbye, Next.js!'})
//   }

// export async function GET(request: Request) {
//   await connectMongo();
//   const input = await Input.create({
//     name: "SHasha",
//     email: "shasha@smdfm.com",
//     phone: 9353983599,
//     opportunity: "rbf",
//     terms: true,
//   });
//   console.log(input);
//   // NextResponse.json({input})

//   // return new Response("Hello, Next.js!");
// }

export default async function handler(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const inputs = await Input.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: inputs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const input = await Input.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: input });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
