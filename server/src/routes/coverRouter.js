const express = require('express')
const router = express.Router()

const multer =require('multer')
const Cover=require('../models/cover')


const storage =multer.diskStorage({
    destination:function ( req,file,cb){
        cb(null,'../client/src/uploads/cover')
    },
    filename : function(req,file,cb){
      console.log(file)
        cb(null,file.originalname)
    }
});
const upload =multer ({ storage:storage}). single('picture')


router.post('/cover', upload, async (req, res,) => {
  console.log(req.file)
 
  console.log(req.message)

  const cover =new Cover(
    {
    
      picture: req.file.filename,

      file:req.file.path,
      message:req.body
     
      

    }
   )
   const data= await cover.save()
    try {
      if (data) {
        res.json({
          msg: "your details is posted",
        });
      } else {
        res.status(500).json({
          error: "something went wrong",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  router.get("/cover", async (req, res) => {
    try {
        const data = await Cover.find()
        if(data){
            res.status(200).json({
                pic: data
            })
        }else{
            res.status(500).json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
    });
  module.exports = router;