// $(document).ready(function(){

// });
// 위의 코드와 같은 역할을 한다.
$(function(){
    $(".btn1").click(function(){
        $("#p1").css({
            "color": "#f00",
            "font-weight": "bold"
        });
    });
    $(".btn2").on({
        // 마우스가 btn2에 올라갔을 때와 포커스가 갔을 때
        "mouseover focus": function(){
            $("#p2").css({
                "color": "#0f0",
                "font-weight": "900"
            });
        },
        // 마우스가 btn2에서 커서가 나가거나 포커스를 강제로 잃어버렸을 때
        "mouseout blur": function(){
            $("#p2").css({
                "color": "#000",
                "font-weight": "normal"
            })
        }
    });
});