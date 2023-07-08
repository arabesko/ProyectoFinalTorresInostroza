import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { CarritoProvider } from "./context/CarritoContext"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={ <h2>aun no esta listo</h2>}/>
            </Routes>
          </CarritoProvider>
      </BrowserRouter>
        
    </div>
  )
}

export default App

