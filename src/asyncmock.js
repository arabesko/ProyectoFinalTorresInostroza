const misArticulos = [
    { id: "1", nombre: "Garbanzos", precio: 1300, stock:10, img: "../img/garbanzos.png", idCat: "1" },
    { id: "2", nombre: "Lentejas", precio: 2500, stock:10, img: "../img/lentejas.png", idCat: "1" },
    { id: "3", nombre: "Porotos", precio: 2500, stock:10, img: "../img/porotos.png", idCat: "1" },
    { id: "4", nombre: "Habas", precio: 3000, stock:10, img: "../img/habas.png", idCat: "1" },
    { id: "5", nombre: "Apio", precio: 1500, stock:10, img: "../img/apio.png", idCat: "2" },
    { id: "6", nombre: "Zanahoria", precio: 750, stock:10, img: "../img/zanahoria.png", idCat: "2" },
    { id: "7", nombre: "Pimenton", precio: 800, stock:10, img: "../img/pimenton.png", idCat: "2" },
    { id: "8", nombre: "Pepino", precio: 650, stock:10, img: "../img/pepino.png", idCat: "2" },
]

//Obtiene todos los productos
export const obtenetProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misArticulos);
        }, 500)
    })
}

//Obtiene un producto
export const ObtenerUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const producto = misArticulos.find(prod => prod.id ===id);
            resolve(producto);
        }, 500);
    })
}

//Obtiene una categoria
export const obtenerCategorias = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const categorias = misArticulos.filter(prod => prod.idCat === idCategoria);
            resolve(categorias);
        }, 500);
    })
}