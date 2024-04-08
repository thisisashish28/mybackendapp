import { model, Schema } from 'mongoose';

export const FoodSchema = new Schema(
    {
        name:{type:String, reuired:true},
        price:{type:Number,required:true},
        tags:{type:[String]},
        favourite:{type:Boolean, default:false},
        stars:{type:Number,default:3},
        imageUrl:{type: String, required:true},
        origins:{type:[String], required:true},
        cookTime: {type:String, required:true},
    },
    {
        toJSON:{
            virtuals:true,
        },
        toObject: {
            virtuals: true,
        },   
    }
);

export const FoodModel = model('food', FoodSchema);
