import { getAllShops, getShopById,getCategoryShops } from '../controllers/shopsCT.js'
import { Router } from 'express'

export const router = Router()


router.get('/shop/:id', getShopById);
router.get('/shops/:category', getCategoryShops)
router.get('/', getAllShops);
