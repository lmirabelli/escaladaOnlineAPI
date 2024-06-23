import { Shop } from '../model/schemaShops.js'

export const createShop = async (req, res) => {
    try{
        console.log()
        const newShop = Shop(req.body)
        console.log(newShop)
        await newShop.save();
        res.status(201).json(newShop);
    } catch(err){
        res.status(400).json({ message: err.message });
    }
}