// 사용자로부터 입력받는 부분
var data = prompt("어디까지 숫자를 출력할까요?", "숫자입력");
// string -> number
data = parseInt(data);

for(var i = 1; i <= data; i++){
    document.write(i + "<br/>");
}