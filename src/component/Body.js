import React from "react";
import "./Body.css";

const Body = (props) => { //Body 컴포넌트
  const number = 1;  
  const number1 = 10;
  const number2 = 20;
  const str1 = "hello";
  const str2 = "world";
  const bool1 = true; //boolean type
  const bool2 = false;
  const obj1 = {
    name : "홍길동",
    age : 27
  };
  return (
    <>
    {/* <React.Fragment> <- 랜더링 되지 않음 */}    
      <div className="test">
        <h1>Body : 우리회사는 세계 제일의 제약회사 입니다!</h1>
      </div>
      <h2>{number}</h2>
      <h3>{number1 + number2}</h3>
      <h3>{str1 + str2}</h3>
      <h3>{String(bool1)}</h3>
      {/* 불리언 타입인 true, false는 랜더링이 되지 않아 String 형으로 변환 후 출력 */}
      <h3>{bool2}</h3>
      <h3>{obj1.name}</h3>
      <h3>{obj1.age}</h3>
      <h3>
        {number}는 {number % 2 == 0 ? "짝수":"홀수"} 입니다.
      </h3>      
      <h1>전달받은 props 값 : name = {props.name}, age = {props.age}</h1>   
    {/* </React.Fragment> */}
    </>  
  );
}

export default Body;