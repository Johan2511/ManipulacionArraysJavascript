const numbers = [1, 30, 49, 29, 10, 13];


let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element <= 40) {
        rta = false;
    }
}

console.log('for', rta);
const rta2 = numbers.every(item => item <= 40);
console.log('every', rta2);

//reto

const team = [
    { name: "Nicolas", age: 12 },
    { name: "Andrea", age: 8 },
    { name: "Zulema", age: 2 },
    { name: "Santiago", age: 18 },
];

// Función para verificar si la edad es menor o igual a 15
const isUnder15 = (member) => member.age <= 15;

const allUnder15 = team.every(isUnder15);
console.log('Todos los miembros del equipo tienen menos de 15 años:', allUnder15);


