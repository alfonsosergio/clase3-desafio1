class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Faltan datos");
        }else{
            const product = {
                id: this.#generarCode(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }         
            
            if (product.id == 1) {
                this.products.push(product)
            }else{
                const result = this.products.filter(produc => produc.code === product.code); 
                if (result) {
                    console.log("El producto ya existe");
                }
            }

        
            
        }

    }
    getProduct(){
        return this.products
    }
    getProductById(id){
        const result = this.products.filter(product => product.id === id);
        console.log(result);
        (result.length > 0) 
            ? result 
            : console.log("Producto no existe"); return ["Producto no existe"];
    }

    #generarCode(){
        const id = 
            this.products.length === 0 
                ? 1 
                : this.products[this.products.length - 1].id + 1
        return id
    }
}

const productManager = new ProductManager()
const listaProducts1 = productManager.getProduct()
console.log(listaProducts1);
productManager.addProduct("pantalon","pantalon largo","1000","Sin imagen","abc123","25")
console.log(productManager);
const listaProducts2 = productManager.getProduct()
console.log(listaProducts2);
productManager.addProduct("pantalon","pantalon largo","1000","Sin imagen","abc123","25")

const listaProductsById = productManager.getProductById(2)
console.log(listaProductsById);
//const listaProducts = productManager.getProduct()
//const listaProductsById = productManager.getProductById(2)
//console.log(listaProducts);
//console.log(listaProductsById);