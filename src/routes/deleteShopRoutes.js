import { deleteShop } from '../controllers/deleteShopController.js'
import { Router } from 'express'

export const router = Router()



router.delete('/shop/:id', deleteShop);

