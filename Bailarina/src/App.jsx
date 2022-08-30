import { ChakraProvider, Heading} from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer/index'
import { ItemDetailContainer } from '../src/components/ItemDetailContainer/Index'
import { BrowserRouter,Routes, Route,} from 'react-router-dom'
import { Cart } from './components/Cart/Cart'
import {CartContextProvider} from '../src/Context/Context'
import '../src/Firebase/firebase'
function App() {
  return (
      <CartContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
            <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
      </CartContextProvider>
  )
}

export default App