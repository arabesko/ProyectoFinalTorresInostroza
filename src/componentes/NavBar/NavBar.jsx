import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Supermercado</h1>
        <nav>
            <ul>
                <li>Productos</li>
                <li>Servicio</li>
                <li>Otros</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar