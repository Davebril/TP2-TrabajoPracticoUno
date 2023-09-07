import * as operaciones from './logica.js'

let rutafile = process.cwd() + "\\archivo\\textoPrueba.txt"

operaciones.leerArchivoComoString(rutafile)
operaciones.escribirTextoEnArchivo(process.cwd() + "\\archivo\\textoTest.txt", "Mi nombre es Esteban", true)
console.log(operaciones.transformarStringEnArrayDeNumeros("10 | 987 | 654 | 1bc | 321", " | "))
console.log(operaciones.transformarArrayDeNumerosAUnSoloString([10, 987, 654, 321], ","))
console.log(operaciones.combinarDosArrays([11, 15, 20], [12, 13, 14, 21]))
console.log(operaciones.combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))