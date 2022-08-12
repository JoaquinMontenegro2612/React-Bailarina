import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
// import {ItemListContainer} from './components/ItemListContainer/index'
import { ItemDetailContainer } from '../src/components/ItemDetailContainer/Index'


function App() {
  return (
    <ChakraProvider>
    <Navbar/>
    {/* <ItemListContainer/>  */}
    <ItemDetailContainer/>
    </ChakraProvider>
  )
}

export default App