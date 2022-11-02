import { db } from '../../Firebase/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import Page from "../Page/Page";
import List from "../List/List";
import { InputGroup, Input, Button, InputLeftElement, HStack, Text } from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon, CheckCircleIcon} from '@chakra-ui/icons'
import Swal from 'sweetalert2'
    
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
    console.log(ordenCompra);
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
            if(nombre === "" || apellido === "" || email === "" || celular === ""){
                alert(`Completa todos los campos`)
            }
            else if(celular.length === 10 && email === email2){
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
                    Swal.fire(
                        {
                        title: `Felicitaciones su pedido fue creado con exito. Su id de Pedido es <b>${res.id}</b> `,
                        confirmButtonText: '<a href="/" style="color:white;" onclick="$(cleanCart())">Finalizar Compra</a>',
                        width: 600,
                        padding: '3em',
                        color: '#000000',
                        imageUrl: "https://i.gifer.com/origin/7e/7eab69f24ce2631fee6280be512eb46e.gif",
                        imageWidth: 600,
                        imageHeight: 300,
                        background: '#ffff'
                        });
                    })
                .catch(err => {console.log(err)})
                setBtn(true)
            }else{
                alert(`Numero de celular o Email incorrecto`)
            }
        }
    return(
        <Page>
            {!btn && <InputGroup className="ordenCompra">
            <InputGroup>
            <InputLeftElement pointerEvents='none' children={<CheckCircleIcon color='gray.300' />} />
            <Input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>            
            </InputGroup>
            <InputGroup>
            <InputLeftElement pointerEvents='none' children={<CheckCircleIcon color='gray.300' />} />
            <Input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>
            </InputGroup>
            <InputGroup>
            <InputLeftElement pointerEvents='none' children={<AtSignIcon color='gray.300' />} />
            <Input type="email" placeholder="Correo electronico" onChange={handleChangeEmail} value={email}/>
            </InputGroup>
            <InputGroup>
            <InputLeftElement pointerEvents='none' children={<AtSignIcon color='gray.300' />} />
            <Input type="email" placeholder="Reescriba su correo" onChange={handleChangeEmail2} value={email2}/>
            </InputGroup>
            <InputGroup>
            <InputLeftElement pointerEvents='none' children={<PhoneIcon color='gray.300' />} />
            <Input type="number" placeholder="Celular" onChange={handleChangeCelular} value={celular} />
            </InputGroup>
            </InputGroup>}
            {!btn && <Button className="btnCompra" onClick={handleConfirm}>Confirmar Compra</Button>}
            <List usuarios={usuario}/>
        </Page>
    )
}



export {Usuario}