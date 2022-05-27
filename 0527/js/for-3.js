// string배열을 선언과 동시에 초기화
// 배열은 인덱스로 관리를 해서 값을 수정할 때도 인덱스를 사용해야 한다.
// 단 배열의 인덱스는 0부터 시작함
var data = ["서울", "인천", "대구", "부산", "광주", "제주", "전주"];
// document.write(data[0]);

// 배열명.length는 배열의 길이를 구해준다.
document.write("data배열의 길이 : " + data.length + "<br/>");
for(var i = 0; i < data.length; i++){
    document.write(data[i] + "<br/>");
}