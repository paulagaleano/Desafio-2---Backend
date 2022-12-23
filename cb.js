const productManager = require("./productmanager");
const { serum, tonico } = require("./productos");

const newProductManager = new productManager('productos.json');
// newProductManager.addProduct(serum)
// newProductManager.getProducts()
// console.log(tonico)
// newProductManager.getProductById(4)
// newProductManager.updateProduct(2, { nombre: 'facial nuevo' } )
// newProductManager.deleteProduct(1)