import '../models/connection.js';
import '../models/user.model.js';
import url from 'url';
import UserSchemaModel from '../models/user.model.js';
import express from 'express';
// save
export var save=async(req,res,next)=>{
    var userDetails=req.body;
    var UserList=await UserSchemaModel.find();
    var l=UserList.length;
    var _id=l==0?1:UserList[l-1]._id+1
    var userDetails={...userDetails,"_id":_id,"status":1,"role":"user","info":Date()};
    console.log(userDetails);
    var user=await UserSchemaModel.create(userDetails);
    if(user)
    return res.status(201).json({"status":true})
    else
    return res.status(500).json({"status":false});
}
  