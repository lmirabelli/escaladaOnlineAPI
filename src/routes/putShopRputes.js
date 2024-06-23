import { editShop } from '../controllers/putShopControllers.js'
import { Router } from 'express'

export const router = Router()


router.put('/editShop/:id', editShop)
