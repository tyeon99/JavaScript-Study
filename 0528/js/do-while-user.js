varninputString = null;

alert("메시지를 입력하세요.");
alert("프로그램을 종료하려면 q를 입력하세요.");
// 최소 한번은 무조건 실행된다. 사용자의 의도를 물어보는 프로그램에
// 사용하면 된다.

do{
    inputString = prompt("메시지를 입력하세요.");
    document.write(inputString + "<br/>");
}while(!(inputString == "q"));  // q를 입력하면 true가 되어 루프를 계속 진행하기 때문에
// !()논리부정연산자를 사용하여 false로 바꾸고 있다.

document.write("프로그램 종료!!");