import mongoose from 'mongoose';
var url="mongodb://127.0.0.1:27017/portfolio";
mongoose.connect(url);
console.log("successfully to connected mongodb server");