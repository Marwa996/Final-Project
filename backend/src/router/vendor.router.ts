import { productModel } from './../models/vendor-products';
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
const router = Router();

// router.get("/seed",expressAsyncHandler(
//     async (req,res)=>{
//         const productsCounts = await productModel.countDocuments();
//         if(productsCounts>0){
//             return;
//         }
        
//         await productModel.create(sample_products);
//     }
// ))

router.get("/products",expressAsyncHandler(
    async (req,res)=>{
        const products = await productModel.find();
        res.send(products);
    }
))

router.get("/add",expressAsyncHandler(
    async (req,res)=>{
        const products = await productModel.find();
        res.send(products);
    }
))

router.post("/products/add",expressAsyncHandler(
    
    async (req,res)=>{
    // console.log(req);
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
        })
        try{
            product = await product.save();
            console.log("saved");
        }catch(e){
            console.log("error")
        }
    }
))

export default router;