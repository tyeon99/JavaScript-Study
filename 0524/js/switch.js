// 사용자로부터 입력받는 부분
var rank = window.prompt("직급을 입력하세요. 1-부장, 2-차장, 3-과장, 4-대리, 5-사원");

// 문자를 숫자로 강제 변환
// score = parseInt(score);
// switch문은 정형화, 한정된 데이터에 가독성을 좋게 하고자 한다면
// switch문을 쓸 것을 고려해도 좋다.
switch(rank){
    case "1" : document.write("<p>부장의 급여는 <strong>700만원</strong>입니다.</p>");
        break; // break문이 없으면 입력한 부분아래에 있는 내용을 다 출력함.
    case "2" : document.write("<p>부장의 급여는 <strong>600만원</strong>입니다.</p>");
        break;
    case "3" : document.write("<p>부장의 급여는 <strong>500만원</strong>입니다.</p>");
        break;
    case "4" : document.write("<p>부장의 급여는 <strong>400만원</strong>입니다.</p>");
        break;
    case "5" : document.write("<p>부장의 급여는 <strong>300만원</strong>입니다.</p>");
        break;
    // default는 옵션이다.
    default : alert("잘못 입력하셨습니다.");
}
