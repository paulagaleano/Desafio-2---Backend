const productManager = require("./productmanager");
const [ Serum ] = require("./productos");

const newProductManager = new productManager("./productos.json");
newProductManager.getProductById()