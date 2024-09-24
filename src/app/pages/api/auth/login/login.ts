import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "../../../../server/server.connect"; 
import { messages } from "../../../../../../utils/message";
import User, { Iuser } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connectMongo();

    const body: Iuser = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: messages.error.needProps },
        { status: 400 }
      );
    }

    const userFind = await User.findOne({ email });
    if (!userFind) {
      return NextResponse.json(
        { message: messages.error.UserNotFound },
        { status: 404 }
      );
    }

    const isCorrect: boolean = await bcrypt.compare(password, userFind.password);
    if (!isCorrect) {
      return NextResponse.json(
        { message: messages.error.wrongPassword },
        { status: 401 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPass, ...rest } = userFind.toObject();
    const token = jwt.sign({ data: rest }, 'secreto', {
      expiresIn: '86400s'
    });

    const response = NextResponse.json(
      { userLogged: rest, message: messages.success.userLogged },
      { status: 200 }
    );
    response.cookies.set("auth_cookie", token, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
      httpOnly: true
    });

    return response;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 500 }
    );
  }
}
