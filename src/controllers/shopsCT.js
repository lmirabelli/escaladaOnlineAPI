import { Shop } from '../model/schemaShops.js'


export const getAllShops = async (req, res) => {
    try {
      const shops = await Shop.find({});
      res.status(200).json({shops});
    } catch (err) {
      res.status(500).json({ message: 'No encontre los comercios', error: err.message });
    }
  };

  export const getShopById = async (req, res) => {
    const { id } = req.params;
    try {
        const shop = await Shop.findById(id);
        if (!shop) {
            return res.status(404).json({ message: 'No encontre el comercio' });
        }
        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCategoryShops = async (req, res) => {

    const categoryFilter = req.params;
    
    try{
        const totalShops = await Shop.find({})
        const shops = await Shop.find(categoryFilter)
        const categoryList = []

        totalShops.map(item => {
            categoryList.find(i => i == item.category) == undefined && categoryList.push(item.category)
        })
        
        res.status(200).json({shops, categoryList});
    }catch (error) {
        res.status(500).json({ message: error.message });
    }

}

