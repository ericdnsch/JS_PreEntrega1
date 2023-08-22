function convertidor( cantidad_pesos , divisa ){

    cantidad_pesos = parseFloat(cantidad_pesos);

    let comision = 0;

    if ( cantidad_pesos <= 10000) {

        comision = cantidad_pesos - (cantidad_pesos * 0.030)
        console.log("La comision es del 3%");
        
    } 
    
    else if( cantidad_pesos > 10000) {
    
        comision = cantidad_pesos - (cantidad_pesos * 0.020)
        console.log("La comision es del 2%");
    }
    
    let monto_total = 0;

    if( divisa == "USD" && cantidad_pesos > 0){
        monto_total = comision / 720;
        return monto_total
    }
    else if( divisa == "EUR" && cantidad_pesos > 0){
        monto_total = cantidad_pesos / 780;
        return monto_total
    }
    else if( divisa == "BRL" && cantidad_pesos > 0){
        monto_total = cantidad_pesos / 70;
        return monto_total
    }
    else if( divisa == "BTC" && cantidad_pesos > 0){
        monto_total = cantidad_pesos / 26000;
        return monto_total
    }
    else {
        console.log("Divisa o cantidad no valida");
        return;
    
    }

}


console.log("Bienvenido a nuestra Casa de Cambio");

let cantidad_pesos = 0;


while( cantidad_pesos != "FIN" ){

    cantidad_pesos = prompt("Ingrese la cantidad de pesos (ARS) que desea cambiar o FIN para finalizar");
    cantidad_pesos = cantidad_pesos.toUpperCase();

    if( cantidad_pesos != "FIN"){
        
        let divisa = prompt("Ingrese la divisa a la cual desea convertir: USD , EUR , BRL , BTC");
        divisa = divisa.toUpperCase();
        

        let resultado_del_convertidor = convertidor( cantidad_pesos , divisa );
        
        
        console.log("Recibis", resultado_del_convertidor + " " + divisa );
        
    }
    else{
        console.log("Muchas gracias");
    }

}