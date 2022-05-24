// 사용자로부터 입력받는 부분
var userID = window.prompt("아이디를 입력하세요.");
var userPW = window.prompt("패스워드를 입력하세요.");

// 값 비교
if(userID == "Kim" && userPW == "1111"){
    alert(userID + "님이 로그인 하셨습니다.");
}
else if(userID == "Kim"){
    alert("패스워드가 잘못 입력되었습니다.");
}
else{
    alert("아이디가 잘못 입력되었습니다.");
}
