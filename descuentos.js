/*const precioOriginal = 120;
const descuento = 18;
const porcentajeConDescuento = 100 - descuento;
const precioDescuento = (precioOriginal * porcentajeConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,precioDescuento,
    porcentajeConDescuento
})*/
function compra(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioDescuento = ( precio * porcentajeConDescuento) / 100;
    return precioDescuento;
}

function botonPrecioDescuento(){
    const input = document.getElementById("inputPrecio");
    const precio = parseInt(input.value);

    const input2 = document.getElementById("inputDescuento");
    const descuento = parseInt(input2.value);

    const valorTotal = compra(precio,descuento);

    const resultadoPrecio = document.getElementById("resultadoPrecio");
    resultadoPrecio.innerText =`el producto costaba ${precio} dolares, el descuento es de ${descuento}%, el valor total a pagar es de ${valorTotal}`;
}