// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras = [
    "Manzana", "Manteca", "Pan", "Naranja", "Harina" 
]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol")

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop()

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo : "Jurassic Park",
    director : "Steven Spielberg",
    fecha: 1993}, 
    {titulo : "Braveheart",
    director : "Mel Gibson",
    fecha: 1995}, 
    {titulo : "Moneyball",
    director : "Bennett Miller",
    fecha: 2011}, 
]


// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const post2010 = peliculas.filter(obj => obj.fecha > 2010)
// console.table(post2010)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(obj => obj.director )
// console.log(directores)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(obj => obj.titulo )
// console.log(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directorTitulo = directores.concat(titulos);
// console.log(directorTitulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directorTitulo2 = [...directores, ...titulos]
// console.log(directorTitulo2)