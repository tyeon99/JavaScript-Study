$(document).ready(function(){
    // 글자 숨기기 버튼을 눌렀을 때
    $("#showText").click(function(){
        $("div").hide();
    });

    // 글자 보이기 버튼을 눌렀을 때
    $("#hideText").click(function(){
        $("div").show();
    });
});