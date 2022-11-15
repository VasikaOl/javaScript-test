// ЗНАЙОМСТВО З МАСИВАМИ
// - Оголошення
// - Індексація
// - Довжина
// - Індекс останнього елементу
// - Перевизначення
//
// 'Mango', `Kiwi`, `Poly`, `Ajax`

// const friends = ['Mango', `Kiwi`, `Poly`, `Ajax`];

// console.log(friends);

// function makeArray(firstArray, secondArray, maxLength) {
    
  
// if (firstArray.concat(secondArray) > maxLength) {
//   return maxLength.slice(0);
// }
  
//   return firstArray.concat(secondArray);
  
//   }

//==================================================
// const playlist = {
//   name: 'Мій супер плейліст',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };
// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.tracks);

// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);
//=================================================
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username: username,
//   email: email,

//   username,
//   email
// };

// console.log(signupData);
//=====================================================

// input name='color' value='tomato'

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// }
// console.log(colorPickerData);




// const fn = function (myObject) {
//   //myObject = { a: 1, b: 2 }
//   console.log(myObject);
// }
// fn({ a: 1, b: 2 });

// const rtfm = function() {
//   const x = {};
//   return {a: 5};
// }
// console.log(rtfm());


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let newArray = [];
  

//   for (let product of products) {
//     if (propName === 'name') {
//       newArray.push(product.name);
//       console.log(products);
      
//     }
//     else if (propName === 'price') {
//         newArray.push(product.price);
//     }
      
//     else if (propName === 'quantity') {
//         newArray.push(product.quantity);
//     }
    
//   }
  
//   return newArray;
// }

// const numbers = [1, 2, 3].concat([4,5,6], [7,8,9]);

// console.log(numbers);

const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5]

console.log(numbers);
