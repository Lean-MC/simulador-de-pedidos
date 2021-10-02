/*cada vez que presione el boton ejecuta agregar */
document.getElementById('card').addEventListener('submit',agregar);

/*funcion agregar */
function agregar() {
    /*capturando pedidos */
let vegana = document.getElementById('vegana').value;
let vegetariana = document.getElementById('vegetariana').value;
let baja = document.getElementById('baja').value;
let celiaca = document.getElementById('celiaca').value;
let dulce = document.getElementById('dulce').value;


let encomienda = {
    vegana,
    vegetariana,
    baja,
    celiaca,
    dulce
}

if(localStorage.getItem('encomiendas') === null ){
    let encomiendas =[];
    encomiendas.push(encomienda)
    localStorage.setItem('encomiendas',JSON.stringify(encomiendas))
}else{
    let encomiendas = JSON.parse(localStorage.getItem('encomiendas'))
    encomiendas.push(encomienda)
    localStorage.setItem('encomiendas',JSON.stringify(encomiendas))
}

guardar(); 

document.getElementById('card').reset();
}


/**/

function guardar(){
    let encomiendas = JSON.parse(localStorage.getItem('encomiendas'));
    
    document.getElementById('tbody').innerHTML="";

    for (let i = 0; i < encomiendas.length; index++) {
        
        let vegana = encomiendas[i].vegana;
        let vegetariana = encomiendas[i].vegetariana;
        let baja = encomiendas[i].baja;
        let celiaca = encomiendas[i].celiaca;
        let dulce = encomiendas[i].dulce;

        document.getElementById('tbody').innerHTML +=
        `
        <tr>
        <td>${vegana}</td> 
        <td>${vegetariana}</td>
        <td>${baja}</td>
        <td>${celiaca}</td>
        <td>${dulce}</td>

        </tr>
        
        `
    }
}

guardar(); 


 
/**/
function saludar(){
    alert("gracias vuelva prontos")
}