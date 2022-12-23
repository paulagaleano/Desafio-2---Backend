const fs = require('fs');
class productManager {
    constructor(path) {
        this.path = path;
    }

    async #readFile() {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            return parseData
        } catch (error) {
            console.log(error)
        }
    }

    async #productCode(code) {
        const fileData = await this.#readFile();
        return fileData.find((objeto) => objeto.code === code);
    }

    async getProducts() {
        const fileData = await this.#readFile();
        try {
            if (fileData.lenght === 0) throw new Error(`Producto no encontrado`)
            else console.log(fileData)
        } catch (error) {
            console.log(`Producto no encontrado`)
        }
    }

    async addProduct(obj) {
        const fileData = await this.#readFile();
        if (await this.#productCode(obj.code)) return console.log(`Producto con el codigo ${obj.code} ya existe`)
        try {
            if (fileData.lenght !== 0) await fs.promises.writeFile(this.path, JSON.stringify([...fileData, { ...obj, id: fileData[fileData.lenght - 1].id + 1}], null, 2), 'utf-8')
            else await fs.promises.writeFile(this.path, JSON.stringify([{ ...obj, id: 1}]), 'utf-8')
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(id) {
        try {
            const fileData = await this.#readFile()
            if (!fileData.find((objeto) => objeto.id === id)) throw new Error(`Producto con el id ${obj.id} no encontrado`)
            else console.log(fileData.find((objeto) => objeto.id === id))
        } catch (error) {
            console.log(`Producto con el id ${id} no encontrado`)
        }
    }

    async updateProduct(id, obj) {
        try {
            const fileData = await this.#readFile();
            const update = fileData.map((product) => product.id === id ? { ...product, ...obj } : product);
    
            if (!fileData.find((obj) => obj.id === id)) throw new Error(`Producto con el id ${obj.id} no encontrado`);
            else await fs.promises.writeFile(this.fileData, JSON.stringify(update, null, 4));
        } catch (error) {
            console.log(`Producto con el id ${id} no encontrado`)
        }
    }

/*     async deleteProductById(id) {
        try {
            const fileData = await this.#readFile();
            const productsFiltered = fileData.filter((product) => product.id !== id); 

            if (!fileData.find((objeto) => objeto.id === id)) throw new Error(`Producto con el id ${id} no encontrado`);
            else await fs.promises.writeFile(this.path, JSON.stringify(productsFiltered, null, 4));
    } catch (error) {
        console.log(error)
    } */
}

module.exports = productManager;