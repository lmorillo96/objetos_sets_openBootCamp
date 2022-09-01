const myInfo = {
  nombre: "Leandro",
  apellido: "Morillo",
  edad: 26,
  altura: 175,
  eresDev: true,
};

// Variable que obtenga mi edad
const myAge = myInfo.edad;
console.log(myAge);

// Objeto con los datos personales de 2 amigos

const friendOne = { ...myInfo };
friendOne.nombre = "Ferney";
friendOne.apellido = "Martinez";
friendOne.altura = 174;
friendOne.edad = 22;
console.log(friendOne);

const friendTwo = { ...myInfo };
friendTwo.nombre = "Angela";
friendTwo.apellido = "Gonzalez";
friendTwo.altura = 160;
friendTwo.edad = 23;
console.log(friendTwo);

// Nueva lista con todos los datos

const newList = [{ ...myInfo }, { ...friendOne }, { ...friendTwo }];
newList.sort((a, b) => b.edad - a.edad);
console.log(newList);