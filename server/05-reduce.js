const total = [1,2,3,4];


let sum = 0 
for (let index = 0; index < total.length; index++) {
    const element = total[index];
    sum = sum + element
    
}

console.log(sum);

const rta = total.reduce((sum, element) => sum + element, 0);
console.log(rta);