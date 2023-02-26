import { productModel } from '../models/vendor-products';
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
//expressAsyncHandler: middleware for handling exceptions inside of async express routes
    //no need to write try, catch blocks with it


/////////////////////////////////////////////////////////////////////////////////
const multer = require ('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../images')
    },
    filename: (req, file, cb)=>{
        console.log(file)
        cb(null,Date.now())
    }
})
const upload = multer({storage:storage})
///////////////////////////////////////////////////////////////////////////////////

const router = Router();

router.get("/products",expressAsyncHandler(
    async (req,res)=>{
        const products = await productModel.find();
        res.send(products);
    }
))

router.post("/products/add", upload.single("image"),expressAsyncHandler(
    
    async (req,res)=>{
        let product = new productModel({
            title: req.body.Title_Product,
            images:req.body.image_Product,
            quantity:req.body.avialble_Quntity,
            price:req.body.Price,
            dimensions:req.body.DimensionsW,
            matrial:req.body.Material,
            category:req.body.Main_Category,
            subcategory:req.body.Sub_Category,
            colors:req.body.Color_Product,
            overview:req.body.Description
        });
        product = await product.save();
    }
))

export default router;