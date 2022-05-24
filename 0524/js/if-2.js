// 짝수 검사하는 프로그램
var value = window.prompt("숫자를 입력해주세요.");

// prompt()에서 받은 value값은 string타입이다. 그래서 
// 아래 코드는  parseInt()통해서 강제로 정수타입으로 바꾼다.
value = parseInt(value);

if(value % 2 == 0){
    alert("짝수입니다.")
}
else{
    alert("홀수입니다.");
}