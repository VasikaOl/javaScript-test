


# Модуль 3. Заняття 5. Обєкти.

План заняття:
- Обєкти, створення через літерал
- Властивості і методи обєкта
- this в методах обєкта при зверненні до властивостей
- Перебір обєктів: for...in і методи Object.keys|values|entries

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
* Обєкти (робимо плейлист музики: імя, рейтинг, треки, кількість треків)
  - Літерал обєкта
  - Властивості, ключі (імя) і значення
  - Як відрізнити обєкт від області видимості

const playlist = {
  name: 'Мій супер плейліст',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};
console.log(playlist);

Літерал обєкта - це те що знаходиться в фігурних дужках, справа від знака '='.
Приклад:
const x = {};

console.log({});
function log(message) {
  //message = {}
}

const rtfm = function() {
  const x = {};
  return {a: 5};
}
console.log(rtfm());

console.log(playlist.rating); - це вірно, так як rating - це властивість
console.log(playlist['rating']); - - це вірно, так як rating - це властивість

console.log(playlist.propertyName); - це невірно, бо такої властивості propertyName не існує, тому отримуємо - undefined
console.log(playlist[propertyName]);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

* Доступ до властивості
  - obj.key
  - obj['key']
  - відсутні властивості

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
* Короткий запис властивості

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username: username, - де username зліва - це ключ, а зправа - це значення
  email: email, - де email зліва - це ключ, а зправа - це значення

Отже можемо зробити скорочений запис якщо ключ і змінна властивості однакові:
  username,
  email
};

console.log(signupData);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
* Обчислювані властивості

