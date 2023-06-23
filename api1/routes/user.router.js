import express from 'express';
var router=express.Router();

import * as  UserController from '../controller/user.controller.js';
router.post("/save",UserController.save);


export default router;