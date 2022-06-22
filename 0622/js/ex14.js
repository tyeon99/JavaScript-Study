// ready()/load()차이점
// ready() : 이벤트는 클라이언트가 사이트를 방문할 때 요청한 HTM문서
// 객체의 로딩이 끝나면 이벤트를 실행한다.
// load() : 이벤트는 외부에 연동 소스(iframe, img, video 등)의
// 로딩이 끝나면 이벤트를 실행한다.

$(function(){
    $(document).ready(function(){
        var h1 = $(".img").height();
        console.log("ready() : " + h1);
    });
    $(window).load(function(){
        var h2 = $(".img").height();
        console.log("load() : " + h2);
    });
});