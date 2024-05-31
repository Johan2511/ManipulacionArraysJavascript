const words = ['spray', 'limit', 'elite', ' exuberant'];

const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];

    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words);

const orders = [
    {
        customerName: 'John',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Nicolas',
        total: 120,
        delivered: false,
    },
    {
        customerName:'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
]

const filterArrayOrder = orders.filter(item => item.delivered && item.total >= 100)
console.log('filterArrayOrder', filterArrayOrder);


//creando un buscador
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('Nico'));