import {Schema, model} from "mongoose";

const SchemaShop = Schema({
    name: {type: String, required: true},
  adress: {type: String, required: true},
  adressNumber: {type: Number, required: true},
  email: {type: String, unique: true},
  logo: {type: String, default:'https://i.ibb.co/Vtxh4dx/X.png'},
  days: {type: Array},
  hours: {type: Array},
  whatsapp: {type: Number},
  category: {type: String, required: true},
  instagram: {type: String},
  facebook: {type: String},
  tiktok: {type: String},
  web: {type: String}
}) 

export const Shop = model('Shop', SchemaShop)