console.log("hello world!");

// let g = 1;
// // lat a是個變數宣告語法:意思是一個可以改變值得變數
// // const name = "jac";
// // const = 宣告「常數」變數，不能重新賦予數值
// // name =變數名稱
// // "" = 就是變數的內容
// let number = 2; //宣告一個變數 number，值是2
// let temp = number; //把number的值(現在是2)給temp
// console.log(temp); //輸出 temp,顯示2
// number = 4; //把number 改成4
// temp = number; //把新的number值(4)再指定給temp
// console.log(temp); //輸出temp，顯示4

// practice
// let a = 10
// let b = 20
// let c
// c = a
// a = b
// b = c
// //
// console.log(a, b)// // practice

// // let a = 10;
// let b = 20;

// [a, b] = [b, a];

// // 印出來檢查
// console.log("a =", a); // 預期輸出：a = 20
// console.log("b =", b); // 預期輸出：b = 10

// && || == != > < 邏輯運算子
// == (等於)
// 1= (不等於)
// > (大於):判斷左邊的值是否大於右邊的值
// < (小於):判斷左邊的值是否小於右邊的值
// && (and/且:左右邊的必須都為"正確"，最終結果才會是"正確")
// || (or/或:只要有一邊為"正確"，最終結果就會是"正確" )
// let a = 10;
// let b = 20;

// console.log(a != 10);
// console.log(a == 10);
// console.log(a == 10 && b == 20);
// console.log(a == 10 || b == 10);

// // 算數運算子
// // + - * / %
// console.log(1 + 2);
// console.log(2 - 1);
// console.log(2 * 3);
// console.log(6 / 2);
// console.log(5 % 2);

// if (a == 10) {
//   console.log("a is 10");
// } else if (a == 15) {
//   console.log("a is 15");
// } else {
//   console.log("a is not equal 10 and 15");
// }

// for (let i = 0; i < 10; i = i++) {
//   console.log(i);
// }
// console.log("for loop end");

let double = function (num) {
  // num = num || 1 //如果沒有傳入參數，預設為1
  return num * 2;
};
let c = double(2, 3); // 4
console.log(c);

let sayMyName = function (name) {
  console.log("My name is " + name);
};
sayMyName("jac");
sayMyName("mary");
sayMyName("ming");
sayMyName("john");

let total = 0;
for (let i = 0; i <= 100; i++) {
  total = total + i;
}
console.log("0加到100的總和是:", total); //結果會是5050
