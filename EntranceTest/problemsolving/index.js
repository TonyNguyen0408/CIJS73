/* 1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10) */

// Prints help message to the console
// Returns a string
function adjacentElementsProduct(inputArray) {
    let highestNumber = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length; i++) {
        highestNumber = Math.max(highestNumber, inputArray[i] * inputArray[i - 1]);
    }
    return highestNumber;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]))

/* Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team. 
Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115] */

// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let teamOne = a[0];
    let teamTwo = a[1];
    for (let i = 2; i < a.length; i++) {
        if(i % 2 === 0) {
            teamOne += a[i];
        } 
        if(i % 2 === 1) {
            teamTwo += a[i];
        }
    }
    return [teamOne, teamTwo];
}
console.log(alternatingSums([60, 40, 55, 75, 64]))