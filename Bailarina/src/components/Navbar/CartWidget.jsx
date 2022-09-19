import {BsCartCheckFill} from 'react-icons/bs';
import {NavLink} from 'react-router-dom'
import { useCartContext } from "../../Context/Context";
import { Text } from '@chakra-ui/react';



const CartWidget = () => {

  const { totalQuantity } = useCartContext()

  return (
    <>
    <NavLink to='/Cart'>
    <BsCartCheckFill/><Text>{totalQuantity()}</Text></NavLink>
  </>
  )
}

export default CartWidget