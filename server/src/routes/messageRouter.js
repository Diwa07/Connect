const express = require('express')
const router = express.Router()

const Message=require('../models/message')
// const Profile =require('../models/profile')

// const storage =multer.diskStorage({
//     destination:function ( req,file,cb){
//         cb(null,'../client/uploads/profile')
//     },
//     filename : function(req,file,cb){
//       console.log(file)
//         cb(null,file.originalname)
//     }
// });
// const upload =multer ({ storage:storage})
// router.post('/profile', upload.single('avatar'), async (req, res,) => {
//     try {
//       const data = await Users.findByIdAndUpdate(req.body._id, { avatar: req.file.filename })//imageName lai update garne but req.file.filename ma j aauxa tehi banaune
//       if (data) {
//         res.status(200).json({
         
//           msg: 'Profile updated'
//         })
//       } else {
//         res.status(500).json({ msg: 'Something is wrong' });
//       }
  
//     } catch (err) {
//       res.status(409).json({ msg: 'sucess' });
//     }
//   });


//   router.get("/profile", async (req, res) => {
//     try {
//       const data = await Users.find()
  
//       if (data) {
//         res.status(200).json({
//           userDetails: data
//         })
//       } else {
//         res.status(500).json({ msg: 'Something is wrong' });
//       }
  
//     } catch (err) {
//       console.log(err);
//     }
//   });


router.post("/message", async (req, res) => {
    try {
        await Message.create(req.body)
        console.log(req.body)
        res.json({
            msg:"mdg delivered"
        })
} catch (err){
    
    }
       
  });
  module.exports = router;