// 비효율적인 코드
// document.write("1. 태연이 <br/>");
// document.write("2. 태연이 <br/>");
// document.write("3. 태연이 <br/>");
// document.write("4. 태연이 <br/>");
// document.write("5. 태연이 <br/>");

// 반복문 활용
// for(var i = 1; i <= 5; i++){
//     document.write(i + ". 태연이 <br/>");
// }

// 함수를 사용하는 방법 (코드의 재활용)
function callName(name, count){
    for(var i = 1; i <= count; i++){
        document.write(i + ". " + name + "<br/>");
    }
}
// 매개변수를 달리 주면 결과가 달라진다.
callName("태연이", 10);
callName("지혁이", 3);