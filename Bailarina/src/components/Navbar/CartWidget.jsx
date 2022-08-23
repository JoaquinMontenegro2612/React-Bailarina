import {BsCartCheckFill} from 'react-icons/bs';
import {NavLink} from 'react-router-dom'
const CartWidget = () => {
  return (
    <NavLink to='/Cart'>
    <BsCartCheckFill/>
    </NavLink>
  )
}

export default CartWidget