import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id enim sed delectus nemo, dolor eius iusto, laudantium odio assumenda perferendis praesentium debitis beatae asperiores reiciendis doloremque autem suscipit? Numquam, quibusdam!</p>
        <img src={img} alt={nombre}/>
    </div>
  )
}

export default ItemDetail