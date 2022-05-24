// 사용자로부터 입력받는 부분
var score = window.prompt("점수를 입력하세요.");

// 문자를 숫자로 강제 변환
score = parseInt(score);
// 값 비교
if(score >= 90 && score <= 100){
    document.write(score + "점의 학점은? A입니다.");
}
else if(score >= 80 && score <= 89){
    document.write(score + "점의 학점은? B입니다.");
}
else if(score >= 70 && score <= 79){
    document.write(score + "점의 학점은? C입니다.");
}
else if(score >= 60 && score <= 69){
    document.write(score + "점의 학점은? D입니다.");
}
else{
    document.write(score + "점의 학점은? F입니다.");
}
