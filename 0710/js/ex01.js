// 변수에다가 함수를 저장하는 경우
function hi(name){
    document.write(name + "님 환영합니다.");
}
hi("태연");
var fhi = hi;   // 함수 리터럴 -- 함수를 변수에 저장
fhi("지혁");

// 익명함수를 변수에다가 대입 -- 변수가 마치 함수명처럼 사용이 됨
var func = function(){
    document.write("함수 리터럴");
}
func();
// 리터럴(literal)이란 그 자체로써의 의미를 지니는 값을 말한다.
// ex) 100, 태연 등 ...