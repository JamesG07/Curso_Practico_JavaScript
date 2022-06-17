// código del cuadrado

/* console.group("Cuadrados");


// ejercicos resultos sin utiliza funciones !!!


// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

// const perimetroCuadrado = ladoCuadrado * 4 ;
// console.log(`El perímetro del cuadrado es : ${perimetroCuadrado}cm`);

// const areaCuadrado = ladoCuadrado * ladoCuadrado ;
// console.log(`El área del cuadrado es : ${areaCuadrado} cm2`); 

Ejercicios resultos utilizando funciones !!!!

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

Sin funciones !!!
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
*
Con funciones !!!!

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

Sin funciones !!!

console.group("Circulo")
/* const radio = 4;
const diametro = parseInt(radio * 2);
const PI = Math.PI;

const perimetroCircunferencia = parseInt(diametro * PI );
console.log(`El perímetro del la circunferencia es de ${perimetroCircunferencia}`)

const areaCirculo = parseInt (radio * radio) * PI;
console.log(`El área del círuculo es de ${areaCirculo}`);

con funciones !!!

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
console.groupEnd(); */


console.group("Cuadrados");
    function perimetroCuadrado(lado){return lado*4;}
    function areaCuadrado(lado){return lado*lado;}
console.groupEnd();

console.group("Triángulos");
    function perimetroTriangulo(lado1,lado2,base){return lado1 + lado2 + base};
    function areaTriangulo(base,altura){return(base*altura)/2;}
    console.log("El área del triángulo es: "+areaTriangulo+"cmˆ2");
console.groupEnd();

console.group("Círculos");
    function diametroCirculo(radio){return radio*2;}
    const PI=Math.PI;console.log("PI es: "+PI);
    function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);return diametro*PI};
    function areaCirculo(radio){return(radio*radio)*PI;}
console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function  calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo");
    const l1 = parseInt(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const l2 = parseInt(input2.value);

    const base = document.getElementById("inputBase");
    const value3 = parseInt(base.value);

    const perimetro = perimetroTriangulo(l1,l2,value3);
    alert(perimetro);
};

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const BS = parseInt(base.value);

    const altura = document.getElementById("inputAltura");
    const al = parseInt(altura.value);

    const area = areaTriangulo(BS,al);
    alert(area);
}
function calcularAreaCirculo (){
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const  area =areaCirculo(radio);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);

    const perimetro = diametroCirculo(radio);
    alert(perimetro);
}