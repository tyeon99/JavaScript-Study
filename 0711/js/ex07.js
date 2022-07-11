var count = 0;  // 전역변수 선언과 동시에 초기화
var $container = null;

$(document).ready(function(){
    $container = $("#container");
    hi();   // 일반함수 호출
    $("#btnPrint").click(function(){
        hi();
    });
});
// 일반 함수 구현
function hi(){
    $container.append("<p>" + count + "안녕하세여 반갑습니다.");
    count++;
}