import {BsCartCheckFill} from 'react-icons/bs';
import {NavLink} from 'react-router-dom'
import { useCartContext } from "../../Context/Context";



const CartWidget = ({type}) => {

  const { cantidad } = useCartContext()

  return (
    <>
    {type=="header"?(
    <NavLink to='/Cart'>
    <BsCartCheckFill/>
    {cantidad}
    </NavLink>):<></>}
  </>
  )
}

export default CartWidget