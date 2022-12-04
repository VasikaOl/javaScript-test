// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function() {} === function() {},
// );

// const fnA = function () {
//     console.log('hello');
// }
// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);
// ====================================== //
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };
// user.showTag();
// ======================================= //
// const foo = function () {
//     console.log('foo -> this', this)
// }
// foo();
// ====================================== //
// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// // showTag();

// const user = {
//     tag: 'Mango',
// };
// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();
// ====================================== //
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };
// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();
// ====================================== //
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);
// ====================================== //
// const fn = function () {
//     console.log('fn -> this', this)
// };

// fn();
// ====================================== //
// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };
// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();
// ====================================== //

const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor - > this', this);
        // this.color = color;
    };
    
    // changeColor();

    const sweater = {
        color: 'teal',
    };
    sweater.updateColor = changeColor;

    // sweater.updateColor('red');

    return sweater.updateColor;
};

const swapColor = makeChangeColor();
swapColor('blue');

// makeChangeColor();