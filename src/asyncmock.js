const misProductos = [
    { id: 1, nombre: "Garbanzos", precio: 1300, img: "./img/garbanzos.png" },
    { id: 2, nombre: "Lentejas", precio: 2500, img: "./img/lentejas.png" },
    { id: 3, nombre: "Porotos", precio: 2500, img: "./img/porotos.png" },
    { id: 4, nombre: "Habas", precio: 3000, img: "./img/habas.png" },
    { id: 5, nombre: "Apio", precio: 1500, img: "./img/apio.png" },
    { id: 6, nombre: "Zanahoria", precio: 750, img: "./img/zanahoria.png" },
    { id: 7, nombre: "Pimenton", precio: 800, img: "./img/pimenton.png" },
    { id: 8, nombre: "Pepino", precio: 650, img: "./img/pepino.png" },
]


export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id ===id);
            resolve(producto);
        }, 500);
    })
}