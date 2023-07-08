import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregador:" + cantidad);

    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='formatoContenedor'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id enim sed delectus nemo, dolor eius iusto, laudantium odio assumenda perferendis praesentium debitis beatae asperiores reiciendis doloremque autem suscipit? Numquam, quibusdam!</p>
        <img src={img} alt={nombre}/>
        {
          //Logica de montaje y desmontaje del componente
        }
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail