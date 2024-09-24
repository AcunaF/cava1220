import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "../../../../../src/app/server/server.connect";
import { messages } from "../../../../../utils/message";
import { isValidEmail } from "@/utils/isvalidEmail";
import User, { IUserSchema } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectMongo();
    console.log("MongoDB connected successfully");

    const body = await request.json();
    const { email, password, confirmPass } = body;

    if (!email || !password || !confirmPass) {
      return NextResponse.json({ message: messages.error.needProps }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ message: messages.error.isValidEmailMsg }, { status: 400 });
    }
    if (password !== confirmPass) {
      return NextResponse.json({ message: messages.error.passwordNoMatch }, { status: 400 });
    }

    const userFind = await User.findOne({ email });

    if (userFind) {
      return NextResponse.json({ message: messages.error.userExists }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: IUserSchema = new User({ email, password: hashedPassword });
    
    await newUser.save();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPass, ...rest } = newUser.toObject(); 

    const token = jwt.sign(rest as object, 'secreto', {
      expiresIn: '86400s',
    });

    const response = NextResponse.json({
      newUser: rest,
      messages: messages.success.userCreated
    }, {
      status: 201,
    });

    response.cookies.set('auth_cookie', token, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: "strict",
      maxAge: 86400,
      path: '/'
    });

    console.log("Request body:", body);
    return response;
  } catch (error) {
    console.error("Error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: "Invalid JSON input" }, { status: 400 });
    }

    return NextResponse.json({ message: "Error connecting to MongoDB" }, { status: 500 });
  }
}
