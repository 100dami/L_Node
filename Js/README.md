# About __
## Javascript 

### 정적언어
> 자료형을 선언할 때 지정해 주는 언어    
  대표적으로는 C, C++, C#, Java 
```c
int num = 1; // 컴파일 성공
float num2 = 1.03; // 컴파일 성공
bool num3 = 1; // 컴파일 에러
```    
### 동적언어
> 자료형을 실행할 떼 결정하는 언어
  대표적으로는 JavaScript, Ruby, Python, SmallTalk     
``` python
num1 = 10 # number
name = "Evan Hwang" #String
```           

### 배열
> javascript 배열에서는 하나의 배열에 여러가지 섞여 들어갈 수 있음     
``` js
var a = ["Hello", 17, "hi", "bye"];
```   

### 리터럴
> 값을 할당할때 사용됨
  문자열 리터럴, 숫자형 리터럴, 함수 리터럴 등이 있음
** 사용하는 이유? 
=> 생성자 보다 문법이 더 짧고 간결함
``` js
//객체 생성과 할당 
var obj1 = {
  a: 1,
  b: 2
};
//객체 생성한 후 할당 
var obj2 = new Object();
obj2.a = 1;
obj2.b = 2;
```

### 프로토타입 (prototype property)
> Java의 class 와 비슷한 개념이며,
  자신을 만들어낸 객체의 원형 이라고 해석할 수 있음


