// # Trắc nghiệm
// Câu 1: `var` khai báo một biến có phạm vi trong block?
// 2. False
// Câu 2: `const` khai báo một biến có phạm vi trong block?
// 1. True
// Câu 3: `let` khai báo một biến có phạm vi trong block?
// 1. True
// Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì?
// const obj = { foo: 1 }
// obj.bar = 2
// 3. `{foo: 1, bar: 2}`
// Câu 5: Kết quả của ví dụ sau đây là gì?
// const speed = 'quick'
// `The ${speed} brown fox jumps over the lazy dog.`
// 4. 'The quick brown fox jumps over the lazy dog.’
// Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau:
// const obj = {

// }
// Câu 7: Giá trị của `array` trong ví dụ sau:
// const array = [1, 2, 3]
// const extension = [4, 5, 6]

// array = [...extension, ...array]
// 4. `Error`
// Câu 8: Giá trị của a trong ví dụ sau?
// function mystery(...params) {
// 	return params
// }
// let a = mystery(1, 23, 4);
// 2. `[1, 23, 4]`
// Câu 9: Giá trị của biểu thức sau?
// ([...[..."..."]].length)
// 1. `3`
// Câu 10: Giá trị của a và b với ví dụ sau?
// let a = 12, b = 3;
// [a, b] = [b, a];
// 2. a = 3, b = 12
// Câu 11: Giá trị của obj sau trong ví dụ sau?
// const obj = {
// 	name: "MindX"
// }
// const sayHello = (x) => {
// 	let {name} = x
//   name = "Code Intensive"
// }
// sayHello(obj)
// 1. `{name: “MindX”}`
// Câu 12: Giá trị của biểu arr trong ví dụ sau?
// let arr = [1, 2, 3, 4, 5]
// arr.map(item => {
//   if (item % 2 === 0) {
// 		return item;
//   }
// 	return item * 2;
// })
// 1. `[1, 2, 3, 4, 5]`
// Câu 13: Giá trị của total trong ví dụ sau?
// const arr = [1, 2, 3, 4, 5]
// const total = arr.filter(item => item % 2 === 0).reduce((value, item) => value + item , 10)
// 4. `16`

// # Thực hành
// 1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
const reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("abcdef"))
// 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:
let arr = [1, 2, 3, 5, 4, 2, 6, 4]
let pureArr = []
pureArr = arr.filter((item) => {
	return pureArr.includes(item) ? '' : pureArr.push(item)
})
console.log(pureArr)
