// 2의 배수를 제외하고 다 출력하는 코드(홀수 출력)
for(var i = 1; i < 100; i++){
    // 2의 배수인지 확인하는 코드
    if(i % 2 == 0){
        continue;   // continue를 실행하게 되면 
                    // continue아래에 있는 
                    // 실행코드를 무시하고 증감식으로 이동.
    }
    document.write(i + "<br/>");
}