import { Schema, model, models } from "mongoose";

const userScheema = new Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "mail is not a valid email address"      
        ]
    },
    password:{
        type: String,
        required: [true,'Password is required'],
        minlength: 8,
        select: false,

    },
    fullname:{
        type: String,
        required: true, 
        minlength: [3,'Full Name must be at least 3 characters'],
        maxlength: [50,'Full Name must be at least 5 characters'],
    }
})

const User = models.User ||  model('User',userScheema)

export default User;

