var count = 0;  // 전역변수 선언과 동시에 초기화
var $container = null;

$(document).ready(function(){
    $container = $("#container");
    // append()는 문자열을 붙여서 출력하는 함수(메서드)
    $container.append("<p>" + count + "안녕하세용!" + "</p>");
    count++;
    // 버튼이 클릭이 되면 익명함수를 실행하여 지속적으로 글자를 
    // 붙여서 출력하게 된다.
    $("#btnPrint").click(function(){
        $container.append("<p>" + count + "안녕하세용!" + "</p>");
        count++;
    });
});