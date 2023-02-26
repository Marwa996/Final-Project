import { model, Schema } from "mongoose";


export const product_schema = new Schema(
    {
        title: {type: String, required:true},
        images: { type: [String], required:true },
        quantity: {type: Number, required:true},
        price: {type: Number, required:true},
        dimensions: {type: [Number], required:true},
        matrial: {type: String, required:true},
        category: {type: String, required:true},
        subcategory: {type: String, required:true},
        colors: {type: [String], required:true},
        rate: {type: Number},
        overview: {type: String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)

export const productModel = model('products', product_schema)