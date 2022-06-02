// 전역변수 : 프로그램 어디에서도 사용가능하며, 프로그램 종료시 같이 사라진다.
// 지역변수 : 함수나 {}안에 선언되어 있으며, 범위는 {}안에서만 허용이 되며, 
// 함수나 {}내용이 종료되면 사라진다.
var name = "global";    // 전역변수 선언과 동시에 초기화

function func1(){
    var name = "local1"; // 지역변수를 선언과 동시에 초기화
    document.write("name = " + name +"<br/>");
}

function func2(){
    var name = "local2"; // 지역변수를 선언과 동시에 초기화
    document.write("name = " + name +"<br/>");
}

function func3(){
    name = "local3"; // 함수{}밖에 선언되어 있는 전역변수의 내용을 덮어쓴다.
    document.write("name = " + name +"<br/>");
}

// 함수의 {} 밖에서 변수를 출력하고 있으니 당연히 전역변수가 출력이 된다.
document.write("name = " + name + "<br/>"); // global 출력
func1();
func2();
func3();
// 위에서 func3()가 실행되었기 때문에 name이라는 전역변수에 local3라는 값이 덮어 쓰게 된다.
document.write("name = " + name + "<br/>"); // local3 출력