const iva = 0.16 // Const porque el iva nunca va cambiar
const ticket =[];
//Estas variables se quedan asi porque son las que considero deberia cambiar
let impuestos = 0; 
let total = 0;

const factura =() =>{
    const importe = prompt("Ingresa el importe de tu consumo");
    impuestos = (importe * iva);
    total = (importe + impuestos);
    ticket.push(total) 
    alert(`Tu total es de ${total}`)
}

//variable si quiere continuar facturando
let deseaContinuar = true;
//Buble para seguir repitiedno la funcion de facturar pero esta incompletaz porque quiero que despues que salga del bucle imprima todo lo del array
while (deseaContinuar) {
    factura();
    const respuesta = prompt("¿Deseas agregar otra factura? (Sí/No)").toLowerCase();
    deseaContinuar = respuesta === "si";
} 

//Para ver en la consola si los valores de las operaciones estan bien
console.log(ticket)
console.log(impuestos)
console.log(total)




