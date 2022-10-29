/*================== <Приклад змінних> ===================*/

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const massage = 'Ласкаво просимо!';
// const isOpen = true;
// const shouldConfirm = false;

// console.log('Вік', age);
// console.log(totalPrice);
// console.log(userName);
// console.log(massage);
// console.log(isOpen);
// console.log(shouldConfirm);

// const type = typeof 'що завгодно';
// const type = typeof isOpen;

// console.log(type);

// alert('що завгодно')

/*=========================================================*/

/*======= <window.confirm(), window.prompt()> =============*/

// const shouldRenew = confirm('Бажаєте продовжити підписку?');
// console.log(shouldRenew);

// const quantity = prompt('Введіть кількість товарів');
// console.log(quantity);
// console.log(typeof quantity);

// let quantity = prompt('Введіть кількість товарів');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

/*=========================================================*/

/*==<Парс числа з Number.parceInt() і Number.parceFloat()>==*/

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth', elementWidth);

// let elementHeigth = '200.74px';
// elementHeigth = Number.parseFloat(elementHeigth);
// console.log('elementHeigth', elementHeigth);

/*=========================================================*/

/*=============<Метод число.toFixed(digits)>===============*/

// const salary = 1300.16472;
// console.log(salary.toFixed());
// console.log(salary);

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);
// або
// salary = Number(salary.toFixed(2));
// console.log(salary);
// або
// console.log(Number(salary.toFixed(2)));

/*=============<Перетворення до числа з Number(value)>===============*/
/*=============<Значення NaN (Not a Number) і метод Number.isNaN(value)>===============*/
// let quantity = '30';
// let value = 'цю стрічку неможливо привести до числа'

// console.log(Number(quantity));
// console.log(Number(value));

/*=============<Обєкт Math>===============*/
/*=============<Зведення в ступінь>===============*/
/*=============<Exponent operator>===============*/
// console.log(Math);
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// або
// console.log(2 ** 5);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
  // Change code below this line   
  
 
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   }
    
//   else if (customerCredits >= totalPrice) {
//     message = 'You ordered ${orderedQuantity} droids, you have 7 credits left';
//   }    
  
  // Change code above this line
//   return message;
// }
// const pricePerDroid = 3000;
// const orderedQuantity = 5;
// const customerCredits = 23000;
    
// let totalPrice = pricePerDroid * orderedQuantity;
    
// console.log(totalPrice);
// if (totalPrice > customerCredits) {
//     console.log(`Insufficient funds!`);       
// }
// else if (customerCredits >= totalPrice) {
//     console.log(`You ordered ${orderedQuantity} droids, you have ${(customerCredits - totalPrice)} credits left`);
// }

// function checkPassword(password) {
//     const ADMIN_PASSWORD = `jqueryismyjam`;
//     let message;

//     message = password === ADMIN_PASSWORD ? `Access is allowed` : `Access denied, wrong password!`;
//         console.log(message);
//   return message;
  
  
           
// }


// const ADMIN_PASSWORD = `jqueryismyjam`;
// const password = `jqueryismyjam`;
// let message = password === ADMIN_PASSWORD ? `Access is allowed` : `Access denied, wrong password!`;

// console.log(message);

// function getSubscriptionPrice(type) {
//   let price;
  // Change code below this line

//  switch (type) { // Change this line
//    case "starter" :  // Change this line
//       price = 0; // Change this line
//       break;

//    case "professional" : // Change this line
//       price = 20; // Change this line
//       break;

//    case "organization" : // Change this line
//       price = 50; // Change this line
//          break;
//      console.log(type);
//   }

//   // Change code above this line
//     return price;
    
