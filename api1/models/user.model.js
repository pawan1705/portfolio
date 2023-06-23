import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema=mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"email is required"],
        unique:true
    },
    msg:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"message is required"]
    },
    role:String,
    status:Number,
    info:String,
});

UserSchema.plugin(uniqueValidator);
const UserSchemaModel=mongoose.model('pf_collection',UserSchema);
export default UserSchemaModel;
