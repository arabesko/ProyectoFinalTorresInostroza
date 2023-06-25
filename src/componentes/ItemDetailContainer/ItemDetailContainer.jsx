import { useState, useEffect } from "react"
import { ObtenerUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(  ()=> {
      ObtenerUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error => console.log(error))
            
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer