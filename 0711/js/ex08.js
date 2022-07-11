// 객체방식으로 함수를 정의하는 방법
var hi = new Function("name", "document.write(name + '님 환영합니다.')");
hi("태연");

// 익명함수의 확장으로 함수정의
// 재사용하는 것이 목적이 아닌 다른 함수들과의 충돌을 막기위해 사용
(function(name){
    document.write(name + "님 환영합니다.");
})("태연");
