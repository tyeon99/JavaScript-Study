function hello(){
    // 아래 코드는 좌표값과 배경이미지의 크기를 난수로 대입하기
    // 위해서 값을 얻고 있다.
    var rnd1 = Math.floor(Math.random() * 20);
    var rnd2 = Math.floor(Math.random() * 40);
    var rnd3 = Math.floor(Math.random() * 3) + 100;

    // 글자 흔들기
    $(".hello").css({
        "bottom": rnd1, "left": rnd2
    });
    // 배경 확대
    $(".hello .text").css({"background-size": rnd3 + "%"});
}

// 0.01초마다 hello()함수가 호출된다
setInterval(hello, 10);