const express=require("express")
const router=express.Router()
const {Register,Login,logout}=require('../Controller/Controller.js')
const {UpdateController,DeleteController}=require('../Controller/ProfileController.js')
const verifyToken=require('../Middleware/Verifytoken.js')


router.post('/register',Register)

router.post('/login',Login)

router.get('/logout',verifyToken,logout)

router.patch('/update',verifyToken,UpdateController)
router.delete('/delete',verifyToken,DeleteController)




module.exports=router