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

function makeArray(firstArray, secondArray, maxLength) {
    
  
if (firstArray.concat(secondArray) > maxLength) {
  return maxLength.slice(0);
}
  
  return firstArray.concat(secondArray);
  
  }