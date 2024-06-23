import { Shop } from '../model/schemaShops.js'



export const deleteShop = async (req,res) => {

    try {
        const shop = await Shop.findByIdAndDelete(req.params.id);
        if (!shop) {
            return res.status(404).json({ message: 'Comercio no encontrado' });
        }
        res.status(200).json({ message: 'Comercio eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}