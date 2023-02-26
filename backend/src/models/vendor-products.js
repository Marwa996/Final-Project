import { model, Schema } from "mongoose";


export const product_schema = new Schema(
    {
        title: {type: String, required:true},
        images: { type: Array[String], required:true },
        quantity: {type: Number, required:true},
        price: {type: Number, required:true},
        dimensions: {type: Array[Number], required:true},
        matrial: {type: String, required:true},
        category: {type: String, required:true},
        subcategory: {type: String, required:true},
        colors: {type: Array[String], required:true},
        //setting the value of rate to be 1
        rate: {type: Number, default:1},
        overview: {type: String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        //saving the time of creation or editing
        timestamps:true
    }
)

export const productModel = model('products', product_schema)