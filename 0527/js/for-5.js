// 사용자로부터 입력받는 부분
var dan = prompt("몇 단을 출력할까요?");
// string -> number
dan = parseInt(dan);

for(var i = 1; i <= 9; i++){
    document.write(dan + "*" + i + "=" + (dan*i) + "<br/>");
}