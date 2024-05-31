const items = [1,3,2,3];

const rta = items.reduce((acc, item) => { //acc o obj
    if (!acc[item]) {
        acc[item] = 1;
    } else {
        acc[item] = acc[item] + 1;
    }
    return acc;
}, {});

console.log(rta);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const rta1 = data

.map(item => item.level)
.reduce((acc, item) => {
    if (!acc[item]) {
        acc[item] = 1;
}else{
    acc[item] = acc[item] + 1;
}
return acc;
}, {});

console.log(rta1);

// output
{
    1:1;
    3:2;
    2:1;
}

//tarea

// agrupar números en un array en diferentes rangos y luego contar cuántos números hay en cada rango, utilizando el método reduce. Aquí hay un ejemplo de cómo puedes lograr esto:

const dataAgroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const grouped = dataAgroup.reduce((acc, item) => {
    let range;
    if (item >= 1 && item <= 5) {
        range = '1-5';
    } else if (item >= 6 && item <= 8) {
        range = '6-8';
    } else if (item >= 9 && item <= 10) {
        range = '9-10';
    } else {
        range = 'otros'; // Por si hay números fuera de los rangos esperados
    }

    if (!acc[range]) {
        acc[range] = 1;
    } else {
        acc[range] = acc[range] + 1;
    }
    return acc;
}, {});

console.log(grouped);
