// 결과론적으로 아래 더블루프는 8 * 9 = 72번을 반복한다.
// 외부루프의 초기값은 반드시 1번만 초기화가 이루어진다.
for(var i = 2; i <= 9; i++){
    document.write("<div>");
    document.write("<h3>" + i + "단</h3>");
    // 내부루프의 초기값의 외부루프가 도는 만큼 초기화가 이루어진다.
    for(var j = 1; j <= 9; j++){
        document.write(i + " * " + j + " = " + (i * j) + "<br/>");
    }
    document.write("</div>");
}