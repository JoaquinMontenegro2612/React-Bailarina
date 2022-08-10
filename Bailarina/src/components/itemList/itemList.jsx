import Item from "../Item";
const ItemList = ({listaDeProductos}) =>{
    return(
        <>
        {listaDeProductos.map(productos => <Item key={productos.id} productos={productos}/>)}
        </>
    )
}
export default ItemList 