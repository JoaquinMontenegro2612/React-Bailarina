import { createContext,useState, useContext } from 'react'


const CartContext = createContext({}) 

export const useCartContext  = () => useContext(CartContext)
export function CartContextProvider ({children}) 
{
    
    const [cartList, setCartList]= useState([])

    const isInCart = (id) => cartList.find(prod=> prod.id === id)

    const addToCart = (item,quantity) => 
    {
            if (isInCart(item.id)) 
            {
                const newCart = cartList.map( prod => 
                {
                    if ( prod.id === item.id ) 
                    {
                        const newQuantity = prod.cantidad + quantity
                        return {...prod, cantidad: newQuantity}
                    }
                    else
                    {
                        return prod
                    }
                })
                setCartList(newCart)
            }
            else
            {
                const newProduct = {...item, cantidad: quantity}
                setCartList([...cartList,newProduct])
            }
    }
    const removeProduct = (id) => {setCartList(cartList.filter(prod => prod.id != id))}
    const cleanCart = () => {setCartList([])}
    const totalPrice = () =>
    {
        return cartList.reduce((acc, producto) => acc += (producto.precio * producto.cantidad), 0)
    }
    const totalQuantity =()=> {
        return cartList.reduce((acc, producto) => acc += producto.cantidad, 0)
    }
    return (
            <CartContext.Provider value={{
                cartList,
                addToCart,
                removeProduct,
                cleanCart,
                totalPrice,
                totalQuantity,
                isInCart
            }}>
            {children}
            </CartContext.Provider>
        )
}

