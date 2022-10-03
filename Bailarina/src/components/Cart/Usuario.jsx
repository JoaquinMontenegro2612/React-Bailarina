import { db } from '../../Firebase/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import { Input } from '@chakra-ui/react';
import Page from "../Page/Page";
import List from "../List/List";
// const usuariosCollection = collection(db, "Usuarios")    
const Usuario = () => {
    const {cartList, totalPrice, cleanCart} = useCartContext()

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [celular, setCelular] = useState("")
    const [ordenCompra, setOrdenCompra] = useState("")
    const [btn, setBtn] = useState(false)
    const usuario = []

    const nombreCompleto = `${nombre} ${apellido}`

    const handleChangeNombre = (e) => {
        e.preventDefault()
        setNombre(e.target.value)
    }

    const handleChangeApellido = (e) => {
        e.preventDefault()
        setApellido(e.target.value)
    }

    const handleChangeEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleChangeEmail2 = (e) => {
        e.preventDefault()
        setEmail2(e.target.value)
    }

    const handleChangeCelular = (e) => {
        e.preventDefault()
        setCelular(e.target.value)
    }

    const handleConfirm = () => {

            if(nombre === "" || apellido==="" || email === "" || celular === ""){
                alert(`Completa todos los campos`)
            }else if(celular.length === 10 && email === email2){
            const orden = {
                items: {
                    id: cartList.map(item => item.id),
                    tittle: cartList.map(item => item.producto),
                    price: cartList.map(item => item.precio)
                },
                buyer: {
                    name: nombreCompleto,
                    phone: celular,
                    email: email,
                    email2: email2
                },
                total: totalPrice(),
                date: serverTimestamp()
            }
            
            const ordersCollection = collection(db, "Pedidos")
            
            const consulta = addDoc(ordersCollection, orden)
            consulta
            .then((res)=>{
                    setOrdenCompra(res.id)
                })
                .catch(err => {console.log(err)})
                setBtn(true)
                
            }else{
                alert(`Numero de celular o Email incorrecto`)
            } 
        }

    return(
        <Page>
            {!btn && <div className="ordenCompra">
            <Input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/> 
            <Input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>
            <Input type="email" placeholder="Correo electronico" onChange={handleChangeEmail} value={email}/>
            <Input type="email" placeholder="Reescriba su correo" onChange={handleChangeEmail2} value={email2}/>
            <Input type="number" placeholder="Celular" onChange={handleChangeCelular} value={celular} />

            </div>}
            {!btn && <button className="btnCompra" onClick={handleConfirm}>Confirmar Compra</button>}           

            {btn && <div className="ordenCompra">
                <h1 className="ordenTittle">Orden de Compra:</h1>
                <h2 className="idCompra">{ordenCompra}</h2>
            </div>}
            {btn && <NavLink to="/"><button className="btnClean" onClick={cleanCart}> Finalizar Compra </button></NavLink>}
            <List usuarios={usuario}/>
        </Page>
    )
}

export {Usuario}