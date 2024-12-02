// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1 / num2);
console.log(num1 % num2);//모듈러 연산 : 나머지를 구하는 연산

let inf = Infinity; //양의 무한대
let mInf = -Infinity;

let nan = NaN;//not a number으로 수치연산을 실패했을 때의 결과값

// 2. String Type
let myName = "철수";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
//템플릿 리터럴 문법 : 백틱으로 하면 ${}문자열 안에 변수의 값을 동적으로 넣을 수 있음

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;
//참과 거짓만을 저장 : 어떠한 현재의 상태를 의미하는데 주로 사용

// 4. Null Type (아무것도 없음)
let empty = null;
//이 변수에 그 어떠한 값도 없다를 표현하기 위해 직접 명시적으로 변수에 할당해줘야 하는 값

// 5. Undefined Type
let none;
console.log(none);
//Null과 다르게 진짜 변수를 선언을 하고 아무런 값도 할당하지 않았을때 자동으로 들어가는 값
//미처 초기화하지 못했거나 존재하지 않는 어떤 값을 불러올려고 할때 발생