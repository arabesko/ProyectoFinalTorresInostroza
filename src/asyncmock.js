const misProductos = [
    { id: "1", nombre: "Garbanzos", precio: 1300, img: "../img/garbanzos.png", idCat: "1" },
    { id: "2", nombre: "Lentejas", precio: 2500, img: "../img/lentejas.png", idCat: "1" },
    { id: "3", nombre: "Porotos", precio: 2500, img: "../img/porotos.png", idCat: "1" },
    { id: "4", nombre: "Habas", precio: 3000, img: "../img/habas.png", idCat: "1" },
    { id: "5", nombre: "Apio", precio: 1500, img: "../img/apio.png", idCat: "2" },
    { id: "6", nombre: "Zanahoria", precio: 750, img: "../img/zanahoria.png", idCat: "2" },
    { id: "7", nombre: "Pimenton", precio: 800, img: "../img/pimenton.png", idCat: "2" },
    { id: "8", nombre: "Pepino", precio: 650, img: "../img/pepino.png", idCat: "2" },
]

//Obtiene todos los productos
export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos);
        }, 500)
    })
}

//Obtiene un producto
export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id ===id);
            resolve(producto);
        }, 500);
    })
}

//Obtiene una categoria
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500);
    })
}