import { NextResponse } from "next/server";
import User from '@/models/user'

import { connectDB } from '@/src/server/db.connection';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  await connectDB();
  const {fullname, email, password} = await request.json();

    if(!password || password.length < 6) return NextResponse.json({
        message: "Password must be al least 6 characters"
    },{
        status: 400
     });

try{
  await connectDB();
  const  UserFound = await User.findOne({ email })

if(UserFound) return NextResponse.json({
    message: "Email already exists"
},{
    status: 400
});

const hashedPassword = await bcrypt.hash(password, 12)

  const user = new User({ fullname, email, password: hashedPassword });
  const saveUser = await user.save()
  console.log(saveUser)

  console.log(fullname, email, password);
  return NextResponse.json({
    __id: user.__id,
    email:saveUser.email,
    fullname: saveUser.fullname,
    message: "User created successfully"
  });
} catch (error){
  console.error(error)
  if(error instanceof Error)
  return NextResponse.json({
    message: error.message
    },{
        status: 400
    });

}
}
