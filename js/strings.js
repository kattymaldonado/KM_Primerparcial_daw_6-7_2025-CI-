//Strings o cadena de texto
const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 30 pulgadas");
const producto3= new String("Monitor de 50 pulgadas");//Cuando uso el new
//Lo convierto en objeto
console.log(producto);
console.log(producto2);
console,log(producto3);

console.log(typeof producto);

const producto= "Mouse";
const producto2= "Teclado";
console.log(producto.length); //Obtener el tamñano del string
//Indexof me permite encontrar un elemento en un string el indice comienza en 0

console.log(producto.indexOf("ado")); //Sale -1 xq no encontro la palabra
//Includes (retorna true or false)
console.log(producto.includes("teclado"));

