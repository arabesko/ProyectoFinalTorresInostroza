import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
// import ItemDetail from "./componentes/ItemDetail/ItemDetail"

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <NavBar/>

         <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
         </Routes>

        {/* <ItemListContainer/> */}
        {/* <ItemDetailContainer/> */}
      </BrowserRouter>
        
    </div>
  )
}

export default App

