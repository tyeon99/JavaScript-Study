window.onload = function(){
    // 먼저 아이디 선택자가 menu2를 찾는다.
    var menu2 = document.getElementById("menu2");
    // ul태그(menu2선택자) 하위 요소인 li태그를 배열로 저장
    var liArrays = menu2.getElementsByTagName("li");
    // li태그에 하나씩 접근해서 글자색을 변경
    for(var i = 0; i < liArrays.length; i++){
        var li = liArrays[i];
        li.style.color = "blue";
    }
}