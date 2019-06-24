const mongoose = require('mongoose');
const validator = require('validator');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age has to be positive");

            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Insert a valid email");
            }
        }
    },
    password: {
        type: Number,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error("Password cannot be empty")
            }else if(validator.equals(value.toLowerCase(), "password")){
                throw new Error("Password is invalid")
            }else if(validator.contains(value.toLowerCase(), "password")){
                throw new Error("Password is invalid")
            }
        }
    },  
    tokens:[{
        token: {
            type:String,
            required: true,
        }
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }

})


const User = mongoose.model('User', UserSchema);

module.exports = User;