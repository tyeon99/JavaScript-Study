// prompt를 통해서 입력을 받으면 string 타입으로  된다.
var input = prompt("숫자를 입력해주세요", "숫자");
alert(typeof(input));

// Number()를 통해서 String을 숫자로 바꾸고 있다.
var numType = Number(input);
alert(typeof(numType));
alert(numType);     // NaN (Not a Number) 숫자가 될 수 없는 것을 뜻한다.