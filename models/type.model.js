import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"XXXXX"
    }
});

