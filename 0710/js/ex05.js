function hi(){
    // 중첩함수가 있는 상태
    function helllo(name){
        document.write(name + "님 안녕하세요!");
    }
    return helllo;  // 리턴 값으로 중첩함수를 넘기고 있다.
}
// 함수를 변수에 저장한 것이 아니고 hi()를 호출하고 
// 그 리턴 값으로 hello함수를 받고있는 것이다.
var func = hi();    
func("태연");   // hello("태연"); 동일하다.