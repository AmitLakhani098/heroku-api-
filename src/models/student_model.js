import mongoose from 'mongoose';
import validator from 'validator';

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
        minlength: 3
    },
    email : {
        type: String,
        require: true,
        unique: [true, "Email is already exist."],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        },
    },
    phone: {
        type : Number,
        min : 10 , 
        required : true,
        unique : true
    },
    address : {
        type : String,
        required: true
    }
});


const Student = new mongoose.model('Student', studentSchema);

export default Student;