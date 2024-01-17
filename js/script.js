
let usuarioGuardado = "antopesce"
let claveGuardada = "anto1234"

let nombreUsuario = prompt("Por favor ingrese su usuario")
console.log(nombreUsuario)


//while para validar el usuario con intentos infinitos
while (nombreUsuario !== usuarioGuardado) {
    let nombreMal = prompt("el usuario ingresado no existe, por favor ingreselo nuevamente")
    console.log(nombreMal)
    if (nombreMal === usuarioGuardado) {
        nombreUsuario = usuarioGuardado
    }
}

let clave = prompt(" Por favor ingrese su clave")
console.log(clave)

//condicional para validar la clave de ingreso

if (clave === claveGuardada) {
    alert("Hola " + nombreUsuario + " Bienvenidx a la tienda")
}


//profe llevo muchiismo tiempo tratando de que funcione este ciclo y ya no se qué mas hacer. Se que es una mala practica pero al ppio borre todo lo qye se me ocurrio y ahora pienso que tal vez sirva dejarlo para la revision de cómo lo pensé.

else {
    
    for (let contador = 2; contador == 3; contador = contador++) {
        prompt("La clave ingresada es incorrecta, por favor ingresala nuevamente. Este es el " + contador + " intento")
    }
    if (contador > 3) {
        alert("usuario bloqueado")
        contador = contador++
    }

}


//     if (contador> 3){
//         alert("usuario bloqueado")
//         contador = contador++
//     }
// }

// while (clave === claveGuardada) {
//     alert("Hola " + nombreUsuario + " Bienvenidx a la tienda")


// if (clave !== claveGuardada || contador <= 3) {
//     let claveMal = prompt("La clave ingresada es incorrecta, por favor ingresala nuevamente")

//     contador = contador + 1
//     console.log(contador)

//     // if (claveMal === claveGuardada) {
//     //     alert("Hola " + nombreUsuario + " Bienvenidx a la tienda")
//     // }

//     else if (contador > 3)
//         alert("Clave incorrecta, usuario bloqueado")

// }
// }