$(document).ready(function(){
    // 버튼에 그룹 이벤트 등록(on()를 이용한다.)
    $("#btn").on("mouseover focus", function(){
        // alert("안녕하세요.");
        console.log("이벤트 발생");
    });
});