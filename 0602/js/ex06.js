// 구구단을 출력해주는 함수
function gugudan_print(){
    for(var i = 2; i <= 9; i++){
        document.write(i + "단 출력" + "<br/>");
        for(var j = 1; j <= 9; j++){
            document.write(i + " * " + j + " = " + (i*j) + "<br/>");
        }
        document.write("<br/>");
    }
}
// 함수는 코드를 재활용을 하고있다. 코드도 절약이 되고
// 한번 잘 만들어 놓으면 지속적으로 사용가능하다.
gugudan_print();
gugudan_print();