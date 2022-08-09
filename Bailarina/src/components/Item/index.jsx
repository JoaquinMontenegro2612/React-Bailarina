const Item = ({products}) => {
    return(
        <div id="productConteiner">

        <h1 id="tittleProduct">{products.product}</h1>
        <img id="imagenes" src={products.image} alt="imagen" />
        <p id="desProduct">{products.description}</p>
        <p id="desProduct"> ${products.price} </p>
        <button id="butDetalle">Ver detalle</button>
        </div>
        
    )
}

export default Item