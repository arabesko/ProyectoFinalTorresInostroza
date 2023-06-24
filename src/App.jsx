import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
  )
}

export default App

