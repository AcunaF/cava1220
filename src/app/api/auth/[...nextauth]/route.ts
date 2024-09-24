import CredentialsProvider  from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import {connectDB} from '@/src/server/db.connection'
import User from '@/models/user'
import bcrypt from 'bcryptjs'


const handler = NextAuth({
    providers: [
        CredentialsProvider({
        name:'credentials',
        credentials:{
           email:{label:'Email', type:'email', placeholder:'Enter your email'},
             password:{ label:"password", type:"password",placeholder:"******"}
           },

           async authorize(credentials, req){
           await connectDB()
           console.log(credentials,req)
           const userFound = await User.findOne({email: credentials?.email})
           if (!userFound) throw new Error(`User not found`);
           const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)

            if(!passwordMatch) throw new Error(`Password invalid`);
            console.log(passwordMatch)
                return userFound
           }
        })
      ],
      callbacks: {
        jwt({account, token, user,session})  {
          console.log('JWT ',{account, 
                                token,
                                 user,
                             session});
                         if (user) token.user = user;
                             return token

        },
        session({ session, token }) {

          session.user = token.user as { id: string; name: string; email: string };
          console.log('SESSION ',{session, token});
          return session
        }
      }
})

export { handler as GET, handler as POST}

