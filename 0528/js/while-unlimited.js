var low = 0;    // 범위의 최소값
var high = 0;   // 범위의 최대값
var card = 0;   // 정답

// 게임의 정답을 맞추기 위해서 무한루프를 돌고 잇다.
while(true){
    var count = 0;  // 사용자의 시도 횟수
    low = 0;
    high = 99;  
    card = Math.floor(Math.random() * 100);    // 0~99까지의 난수를 발생
    alert("수를 결정하였습니다. 맞춰 보세요.");

    // 내부 루프의 경우는 정해진 난수를 맞출때까지 실행하는 것
    while(true){
        var n = 0;
        alert(low + "-" + high);    // 값의 범위를 출력
        count++;
        alert("시도횟수 : " + count + "번째");

        n = prompt("숫자를 입력하세요!");   // 사용자로 부터 숫자를 입력받음
        n = parseInt(n);

        if(n > high || n < low){
            alert("값의 범위를 벗어났습니다."); // 예외처리
        }
        else{   //정상적인 범위의 수가 입력된 경우
            if(n == card){
                alert("정답입니다. 짝짝짝!!");
                break;
            }
            else if(n > card){  // 입력된 값이 정답보다 높은 수 라면
                alert("더 낮은 수 입니다.");
                high = n;   // 범위를 재지정하기 위해서 값을 대입한다.
            }
            else{   // 입력된 값이 정답보다 낮을 수 라면   
                alert("더 높은 수 있니다");
                low = n; 
            }
        }
    }
    alert("시도횟수는 " + count + "입니다");

    var con = confirm("다시 게임을 하시겠습니까?(y / n)");
    // 무한루프를 사용할 경우에는 반드시 빠져나갈 곳을 만들어두어야 한다.
    if(con == false){
        break;
    }

}