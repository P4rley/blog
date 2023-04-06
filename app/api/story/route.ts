import { NextResponse } from "next/server";
import { connectDB } from "@/libs/connect";
import Story from "@/models/Story";

export async function GET() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const data = await res.json();

  // return NextResponse.json(data);
  try {
    const connect = await connectDB();
    console.log(connect);
  } catch (error) {
    console.log(error);
  }
}
