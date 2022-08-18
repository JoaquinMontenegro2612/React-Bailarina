import { ChakraProvider, Heading} from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer/index'
import { ItemDetailContainer } from '../src/components/ItemDetailContainer/Index'
import { BrowserRouter,Routes, Route,} from 'react-router-dom'


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
            <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App