Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ]


// solucion

export function filterByLength(array, size = 4) {
    // Tu código aquí 👈
    const newArray = array.filter(item => {
      return item.length >= size
    })
    return newArray
  }