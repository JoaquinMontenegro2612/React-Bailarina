import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer/index'
function App() {
  return (
    <ChakraProvider>
    <Navbar/>
    <ItemListContainer/> 
    </ChakraProvider>
  )
}

export default App