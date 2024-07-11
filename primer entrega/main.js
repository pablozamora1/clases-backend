//clase

class ProductManager {
  static ultId = 0;
  constructor() {
    this.products = [];
  }

  // metodos
  // agregamos productos
  addProducts(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(
        "Todos los campos son obligatorio, completalos para poder continuar"
      );
      return;
    }

    // validamos que el codigo sea unico

    if (this.products.some((i) => i.code === code)) {
      console.log("el codigo esta repetido, cambie el codigo para continuar");
    }

    // creamos un nuevo objeto

    const newProduct = {
      id: ++ProductManager.ultId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    //agregar al array

    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
  }

  getProductsById(id) {
    const product = this.products.find((i) => i.id === id);
    if (!product) {
      console.log("producto no encontrado");
    } else {
      console.log("producto encontrado: ", product);
    }
    return product;
  }
}

const manager = new ProductManager();

manager.getProducts();

// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProducts(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

manager.addProducts(
  "coca cola",
  "para el fernet",
  20000,
  "Sin imagen",
  "abc124",
  25
);

manager.addProducts(
  "fernet",
  "para preparar el fernet",
  20003,
  "Sin imagen",
  "abc125",
  25
);

manager.getProducts();

manager.getProductsById(2);
manager.getProductsById(49);
