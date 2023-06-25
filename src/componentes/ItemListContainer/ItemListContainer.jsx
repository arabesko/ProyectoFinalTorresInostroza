import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { obtenetProductos, obtenerCategorias } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? obtenerCategorias : obtenetProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
        
    }, [idCategoria])

    return (
        <div>
            <h2>Listado de Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer