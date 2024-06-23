import { Shop } from '../model/schemaShops.js'

export const editShop = async (req, res) => {

    try {
        const shopId = req.params.id;
        const updatedData = req.body;

         // Encuentra el negocio
         const shop = await Shop.findOne({ _id: shopId });

         if (!shop) {
             return res.status(404).send({ message: 'Negocio no encontrado' });
         }
 
         // Actualiza los campos del negocio
         Object.keys(updatedData).forEach(key => {
             shop[key] = updatedData[key];
         });
 
         // Guarda el negocio actualizado
         const updatedShop = await shop.save();
 
         res.status(200).send(updatedShop);
     } catch (error) {
         console.error('Error al actualizar el negocio:', error);
         res.status(500).send({ message: 'Error al actualizar el negocio', error });
     }
}