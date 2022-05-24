// 2와 3의 공배수를 검사하는 프로그램
var value = window.prompt("숫자를 입력해주세요.");

// prompt()에서 받은 value값은 string타입이다. 그래서 
// 아래 코드는  parseInt()통해서 강제로 정수타입으로 바꾼다.
value = parseInt(value);

// &&는 논리 연산자로써 두 개의 조건이 true이면 true를 리턴
// if((value % 2 == 0) && (value % 3 == 0)){
//     alert("2와 3의 공배수입니다.")
// }
// else{
//     alert("2와 3의 공배수가 아닙니다.");
// }

// ||는 논리 연산자로써 둘 중의 하나의 조건만 true면 true를 리턴
if((value % 2 == 0) || (value % 3 == 0)){
    alert("2이거나 3의 배수입니다.")
}
else{
    alert("2이거나 3의 배수가 아닙니다.");
}