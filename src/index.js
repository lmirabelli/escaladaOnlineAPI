import express from 'express'
import '../db.js'
import {router as shopRoutes} from './routes/shopRoutes.js'
import {router as addRoutes} from './routes/addShopRoutes.js' 
import {router as deleteRoutes} from './routes/deleteShopRoutes.js'
import {router as putRoutes} from './routes/putShopRoutes.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000
app.post('/addShop', addRoutes)
app.get('/shop/:id', shopRoutes)
app.delete('/shop/:id', deleteRoutes)
app.put('/editShop/:id',putRoutes)
app.get('/shops/:category', shopRoutes)
app.get('/', shopRoutes)

app.listen(PORT, (err) => {
    err?console.log(`Houston tenemos un problema ${err.message}`):console.log(`Servidor Corriendo en puerto ${PORT}`)
})
