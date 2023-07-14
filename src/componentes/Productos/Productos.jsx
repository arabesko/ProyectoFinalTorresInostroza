import { useState, useEffect } from "react";
import { getDocs, collection, query } from "firebase/firestore";

import { base } from "../../services/config";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( () => {
        const misProductos = query(collection(base, "inventario"));
        getDocs(misProductos)
            .then(resp => {
                setProductos(resp.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })

    }, [])

  return (
    <>
        <h2>Productos</h2>
        <div className="productos-container">
            {
                productos.map(producto => (
                    <div className="producto-card">
                        <h2> {producto.nombre} </h2>
                        <p> Precio: $ {producto.precio} </p>
                        <p> Stock: $ {producto.stock} </p>
                        <button> Comprar </button>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Productos