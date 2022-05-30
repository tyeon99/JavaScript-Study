$(document).ready(function(){
    // 지구 웹요소(노드) 찾아서 저장
    var $earth = $("#earth");
    // 버튼에 이벤트 등록(1초동안 left값을 480px이동)
    $("#btnStart").click(function(){
        $earth.animate({
            left: "480px"
        }, 1000)    // 1초동안
    })
})