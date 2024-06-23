import { createShop } from '../controllers/addShopController.js'
import { Router } from 'express'

export const router = Router()

router.post('/addShop', createShop)