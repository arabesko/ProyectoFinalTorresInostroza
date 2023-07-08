import { useState } from "react"

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const agregar = () => {
        if (contador < stock){
            setContador(contador + 1);
        }
    }

    const quitar = () => {
        if (contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <>
        <div>
            <button onClick={quitar}> - </button>
            <p> {contador} </p>
            <button onClick={agregar}> + </button>
        </div>
        <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount