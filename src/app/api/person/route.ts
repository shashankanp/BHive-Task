import connectMongo from "../../../../utils/connectMongo";
import Input from "../../../../models/inputData";
import { NextResponse } from "next/server";

console.log("Connecting to Mongo");
connectMongo();
console.log("Connected to Mongo");

export async function GET(request: Request, response: Response) {
  try {
    const inputs = await Input.find({});
    return NextResponse.json({ success: true, value: inputs });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error });
  }
}

export async function POST(request: Request, response: Response) {
  console.log("request: ", request.body);
  try {
    const input = await Input.create(request.body);
    // console.log(response.body);
    return NextResponse.json({ success: true, value: input });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ success: false, error: error });
  }
}

// export default async (req: any, res: any) => {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const inputs = await Input.find({});
//         res.status(200).json({ success: true, value: inputs });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error });
//       }

//       break;
//     case "POST":
//       try {
//         const input = await Input.create(req.body);
//         res.status(200).json({ success: true, value: input });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error });
//       }

//       break;

//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };
