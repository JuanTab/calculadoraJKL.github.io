'strict mode'

const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll(".btn");



botones.forEach(boton => {
    result = 0;
    gnum = 0;
    entr = 0;

        boton.addEventListener("click",()=> {
        const botonUndido = boton.textContent;
        
        
        if(boton.id === "vaciar"){
            pantalla.textContent = "0";
            result = "0";
            gnum = "0";
            entr = "0";
            return
        }

        if(boton.id === "eliminar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!"){
                pantalla.textContent = "0";
            
            } else {

                pantalla.textContent = pantalla.textContent.slice(0,-1);
             
                if (pantalla.textContent.length === 3 && pantalla.textContent === "ans") {
                    pantalla.textContent = gnum;
                    entr = pantalla.textContent.length;
                } else if (!(pantalla.textContent.length !== 3 && pantalla.textContent.substring(0,3) === "ans")){
                    entr = pantalla.textContent.length;
                    gnum = pantalla.textContent;
                } return 
            }
            return;
        }

        if(boton.id === "res"){

                if (result >= 17){
                    try {
                        pantalla.textContent = eval(gnum + pantalla.textContent.slice(3));

                        if(pantalla.textContent === "Infinity"){
                            pantalla.textContent = "ERROR!";
                        } else {
                            
                            pantalla.textContent = eval(pantalla.textContent)
                           
                            result = pantalla.textContent.length;
            
                            if(result >= 17){
                                gnum = pantalla.textContent;
                                entr = result;
                            }else {
                                entr = 0;
                                gnum = 0;}
                        }
                        
                    } catch {
                        pantalla.textContent = "ERROR!";
                    }  return; 
                   
                } else {
                    try {
                        pantalla.textContent = eval(pantalla.textContent)

                        if ( pantalla.textContent === "Infinity"){
                            pantalla.textContent = "ERROR!";
                        } else {
                       
                            result = pantalla.textContent.length;
        
                            if(result >= 17){
                                gnum = pantalla.textContent;
                                entr = result;
                            }else 
                            {
                                entr = 0;
                                gnum = 0;
                            }
                        }
                    } catch {
                        pantalla.textContent = "ERROR!";
                    }  return; 
                }

//en caso de que el usuario coloque operaciones sin sentido, este sera el mensaje que le saldra
            
            
        }

        
       
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!"){
            switch (botonUndido){
                case "+":
                pantalla.textContent = "0";
                pantalla.textContent += botonUndido;
                break;

                case "-":
                pantalla.textContent = "0";
                pantalla.textContent += botonUndido;
                break;

                case "*":
                pantalla.textContent = "0";
                pantalla.textContent += botonUndido;
                break;

                case "/" :
                pantalla.textContent = "0";
                pantalla.textContent += botonUndido;
                break;

                default : 
                pantalla.textContent = botonUndido;
            }
        } else {
//en caso de el numero tenga digitos mayores que el espacio que se tiene se ejecutara este bloque lo que convertiria el numero anterior en ans 
//y el numero queda guardado en 
            if (entr >= 17 ){
                switch (botonUndido){
                    case "+":  
                        pantalla.textContent = "ans";
                        pantalla.textContent += botonUndido;
                        entr = 0;
                    break;

                    case "-":
                        pantalla.textContent = "ans";
                        pantalla.textContent += botonUndido;
                        entr = 0;
                        break;

                    case "*":
                        pantalla.textContent = "ans";
                        pantalla.textContent += botonUndido;
                        entr = 0;
                        break;

                    case "/":
                        pantalla.textContent = "ans";
                        pantalla.textContent += botonUndido;
                        entr = 0;
                        break;

                    default:
                        pantalla.textContent += botonUndido;
                }
                
            } else {
           
                    let pnt = pantalla.textContent;
                    let final = pnt.length - 1;
                    
                if (botonUndido === "(" && !(pnt.lastIndexOf("*") === final || pnt.lastIndexOf("/") === final || pnt.lastIndexOf("+") === final || pnt.lastIndexOf("-") === final) )
                {
                    pantalla.textContent += "*("
                } else if(botonUndido !== ("+"||"*"||"-"||"/") && pnt.lastIndexOf(")") === final ){
                    pantalla.textContent += "*";
                    pantalla.textContent += botonUndido;
                } 
                else pantalla.textContent += botonUndido;
                }
        
        }
    })
})