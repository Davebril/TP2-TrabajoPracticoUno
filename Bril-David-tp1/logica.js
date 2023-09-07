import fs from 'fs'
import { sep } from 'path'


/* ------------------------- combinarNArrays ------------------------- */
export function combinarNArrays(arrayDeArrays)
{
    let arrayFinal = [] 

    arrayFinal = arrayFinal.concat(arrayDeArrays).flat().sort(function(a, b){return a-b})

    let arrayFinalOrdenado = arrayFinal.filter((element, index) => {
        return arrayFinal.indexOf(element) === index
    }) 

    return arrayFinal
}


/* ------------------------- combinarDosArrays ------------------------- */
export function combinarDosArrays(array1X, array2X)
{
    let arrayFinal = array1X.concat(array2X).sort(function(a, b){return a-b})
    let arrayFinalFiltrado = arrayFinal.filter((element, index) => {
        return arrayFinal.indexOf(element) === index
    })  

    return arrayFinalFiltrado
}

/* ------------------------- transformarArrayDeNumerosAUnSoloString ------------------------- */
export function transformarArrayDeNumerosAUnSoloString(arrayX, separadorX)
{
    let stringHecho = ""

    stringHecho = arrayX.join(separadorX)

    return stringHecho
}

/* ------------------------- transformarStringEnArrayDeNumeros ------------------------- */
export function transformarStringEnArrayDeNumeros(textoX, separadorX)
{
    let textoSeparado = textoX.split(separadorX)

    let indice = 0
    textoSeparado.forEach(element => {
        if(isNaN(element))
        {
            textoSeparado.splice(indice, 1)
        }
        indice++
    });

    return textoSeparado
}

/* ------------------------- leerArchivoComoString ------------------------- */
export function leerArchivoComoString(rutaArchivo)
{
    let datosArchivo = ""

    fs.readFile(rutaArchivo, 'utf-8', (error, datos) => {
        if(error) throw Error(`Error en lectura de archivo: ${error.message}`)
        //console.log('Archivo encontrado:', datos)     
        
        datosArchivo = datosArchivo + datos
    }) 
    
    return datosArchivo
}

/* ------------------------- escribirTextoEnArchivo ------------------------- */
export function escribirTextoEnArchivo(rutaX, textoX, flagX)
{
    fs.readFile(rutaX, 'utf-8', (error, datos) => {
        if(!error)
        {
            fs.writeFile(rutaX, textoX, error =>
            {
                if(error) throw Error(`Error en escritura de archivo: ${error.message}`)
            })
        }
        else
        {
            if(flagX)
            {
                fs.writeFileSync(rutaX, textoX)
            }
            else
            {
                console.log('El archivo no existe')
            }
        }
    }) 

}
