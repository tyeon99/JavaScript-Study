window.onload = function() {
    var list = "";  // 문자열 타입
    var num = 10;   // 정수 타입

    // 복합대입 연산자를 통하여 list변수에 문자열을 누적하고 있다.
    list += "<ul>";
    list += "   <li>안녕</li>";
    list += "   <li>자바스크립트</li>";
    list += "</ul>";

    // 정수형도 아래화 같이 복합대입연산을 통해서 값을 누적시키고 있다.
    num += 10;
    num += 10;
    num += 10;
    num += 10;

    // 문서에 출력하라
    // document.body.innerHTML = list;
    document.write(num);
}