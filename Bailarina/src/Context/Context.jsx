import { createContext,useState, useContext } from 'react'
import { db } from '../Firebase/firebase'
import { collection, getDocs ,serverTimestamp,addDoc,doc, updateDoc } from "firebase/firestore"


const CartContext = createContext({}) 

export const useCartContext  = () => useContext(CartContext)
export function CartContextProvider ({children}) 
{
    const coleccionDePedidos = collection(db, "Pedidos")
    const consultaDePedidos = getDocs(coleccionDePedidos)
    
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

    const actualizarPedidosDB = () =>
    {
        //Traigo los pedidos existentes
        let listaDePedidos;
         //traigo los pedidos de la tabla pedidos
        consultaDePedidos.then(snapshot=>{
            listaDePedidos = snapshot.docs.map(docs=>{
                return{
                ...docs.data(),
                id: docs.id
                }
            })

             // aca me fijo si la tabla tiene algun pedido 
            if (listaDePedidos.length === 1) {           
                //No existe el pedido aun  entonces lo creo desde cero             
                const pedido = {
                    items: cartList,
                    buyer : {
                    name : "Juan Perez",
                    phone : "123456789",
                    email : "falso@mail.com"
                    },
                    date : serverTimestamp(),
                    total: totalPrice()
                }
                const nuevoPedido = addDoc(coleccionDePedidos, pedido)
                nuevoPedido.then((res)=>{
                console.log(res.id);                
                })
                .catch(error => {
                    console.log(error)
                })                          
            }
            else
            {//Si ya se creo el pedido por primera vez actualizo el existente
                let idPedido = "";
                //Busco el id del pedido existente que tiene datos 
                listaDePedidos.forEach(elemento=>{
                    if (elemento.items !== null && elemento.items !== undefined) {
                        idPedido = elemento.id;
                    }
                })
                //Creo la referencia para la db, tabla y id
                const docRef = doc(db, 'Pedidos', idPedido);
                //Actualizo solo el dato del item con el cartlist final
                const actualizarPedido = updateDoc(docRef, {
                    items: cartList
                });
            }
        })       
    }

    return (
            <CartContext.Provider value={{
                cartList,
                addToCart,
                removeProduct,
                cleanCart,
                totalPrice,
                totalQuantity,
                isInCart,
                actualizarPedidosDB
            }}>
            {children}
            </CartContext.Provider>
        )
}

