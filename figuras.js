// código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

// const perimetroCuadrado = ladoCuadrado * 4 ;
// console.log(`El perímetro del cuadrado es : ${perimetroCuadrado}cm`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado ;
// console.log(`El área del cuadrado es : ${areaCuadrado} cm2`);
let cuadrado = (numero,)=>{
const perimetro = parseInt(numero * 4);
console.log(`El perimetro es de ${perimetro}`);
const area = parseInt(numero * numero)
console.log(`El area es de ${area}`)
}
cuadrado(5);
console.groupEnd();

//código del triangulo
console.group("triangulos")
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log(`
    Los lados del triangulo miden:
    ${ladoTriangulo1} cm, ${ladoTriangulo2} cm,  ${baseTriangulo3} cm,
    `);

const perimetroTriangulo = parseInt(ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3);
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}`);

const areaTriangulo = parseInt (baseTriangulo3 * alturaTriangulo ) / 2 ;
console.log(`El área del triángulo es de ${areaTriangulo}`);
*/


const triangulo = function(valor1,valor2,base,altura){
    const perimetro = parseInt(valor1 + valor2 + base);
    console.log(`El perimetro del triangulo es de: ${perimetro} `);
    const area = parseInt(base * altura ) / 2;
    console.log(`El area del triangulo es de ${area}`);
    return perimetro, area
}
triangulo( 6, 6, 4, 5.5);
console.groupEnd();

//código del circulo

console.group("Circulo")
/* const radio = 4;
const diametro = parseInt(radio * 2);
const PI = Math.PI;

const perimetroCircunferencia = parseInt(diametro * PI );
console.log(`El perímetro del la circunferencia es de ${perimetroCircunferencia}`)

const areaCirculo = parseInt (radio * radio) * PI;
console.log(`El área del círuculo es de ${areaCirculo}`);
 */

const diametro = function(radio){
    return radio * 2;
}
const PI = Math.PI;
const perimetro = function(radio){
    const diametrocirculo = diametro(radio);
    return diametrocirculo * PI;
}

function areacirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();