import { useState } from "react"
// import List from "./List";
// import Page from "./Page"
import { db } from "../firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore"
import { useCarrito } from "./CustomProvider";
import { toast } from "react-toastify";
import { HStack,Input,Button } from "@chakra-ui/react";




const Cart = () => {

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
// const [usuarios, setUsuarios] = useState([]);
const { carrito } = useCarrito()

//Variables/Valores precomputados
const nombreCompleto = `${nombre} ${apellido}`;

const handleChangeNombre = (e) => {
e.preventDefault()
const input = e.target
const value = input.value
setNombre(value)
}

const handleChangeApellido = (e) => {
const input = e.target
const value = input.value
setApellido(value)
}

const handleConfirm = () => {

const orden = {
    items: carrito,
    total : 300,
    buyer : {
    name : "Juan Perez",
    phone : "123456789",
    email : "email@mail.com"
    },
    date : serverTimestamp()
    }

    const ordersCollection = collection(db, "orders")
    const consulta = addDoc(ordersCollection, orden)

    consulta
    .then((res)=>{
    toast.success(`Orden ${res.id} creada con exito!`)
    })
    .catch(error => {
    console.log(error)
    })
}

return (
<HStack titulo="Carrito" subtitulo="Compra y vende">

    <Input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
    <Input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />

    <Button onClick={handleConfirm}>guardar</Button>

    {/* <List usuarios={usuarios} /> */}

</HStack>
)
}

export {Cart}