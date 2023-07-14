import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { base } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();
        if(!nombre || !apellido || !telefono || !email || !emailConfirm) {
            setError("Complete los campos vacios");
            return;
        }

        if(email !== emailConfirm) {
            setError("Los campos de email no coiciden");
            return;
        }

        const orden = {
            items: carrito.map( producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
        };

        addDoc(collection(base, "ordenesCompra"), orden)
            .then(docRef => {
                setOrderId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error generando la orden", error);
                setError("Se produjo un error al generar orden, vuelva a intentarlo")
            })
    }
    
  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            {carrito.map(producto => (
                <div>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p>Pecio $ {producto.item.precio} </p>
                    <hr />
                </div>
            ))}
            <hr />
            <div>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="apellido"> Apellido </label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="telefono"> Teléfono </label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email"> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="emailConfirm"> Email </label>
                <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)}/>
            </div>

            <button type="submit"> Finalizar Compra </button>
            {
                error && <p style={{color:"red"}}> {error} </p>
            }
        </form>

        {
            orderId && (
                <strong>Gracias por tu compra, tu id de compra es {orderId} </strong>
            )
        }

    </div>
  )
}

export default Checkout