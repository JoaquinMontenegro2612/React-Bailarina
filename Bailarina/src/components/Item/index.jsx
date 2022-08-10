const Item = ({productos}) => {
    return(
        <div id="productContainer">

        <h1 id="titulo">{productos.producto}</h1>
        <img id="imagenes" src={productos.image} alt="imagen" />
        <p id="detalle">{productos.detalle}</p>
        <p id="descripcion">{productos.descripcion}</p>
        <p id="precio"> ${productos.precio} </p>
        <button id="detalle">Ver detalle</button>
        </div>
        
    )
}

export default Item