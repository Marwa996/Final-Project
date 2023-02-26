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


export default router;