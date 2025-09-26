import {useState} from "react";
import "./Body.css";

function Body({name, age, favorList = [], children}) { //Body 컴포넌트
    function handleOnClick() { //이벤트 핸들러
        alert("버튼을 클릭했음!!");
    }

    function handleOnClick2(e) { //이벤트 핸들러
        console.log(e.target.name);
    }

    const [count, setCount] = useState(0); //[state값, state업데이트 함수(setter)]
    //useState->react 라이브러리에서 불러온 함수

    function onIncrease () { //이벤트 핸들러
        setCount(count + 1);
        console.log("count값:"+count);
    }

    let countTest = 0;

    function onIncrease2 () {
        countTest++;
        console.log("countTest값:"+countTest);        
    }


  console.log(children); //ChildComp 컴포넌트 확인
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
  //console.log(props);

  //const {name, age, favorList} = props; //구조 분해 할당
  //console.log(name, age);

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
      <h1>전달받은 props 값 : name = {name}, age = {age}</h1>
      <h1>내가 좋아하는 음식의 갯수는 {favorList.length}개 입니다.</h1>  
      <h1>{children}</h1> 
     
      <button onClick={handleOnClick}>클릭!!</button>
      <button name="버튼1" onClick={handleOnClick2}>버튼1</button>
      <button name="버튼2" onClick={handleOnClick2}>버튼2</button>
      <br />

      <h1>count값 : {count}</h1>  
      <button onClick={onIncrease}>count 증가 버튼</button>

      <h1>countTest값 : {countTest}</h1>  
      <button onClick={onIncrease2}>countTest 증가 버튼</button>
      
    {/* </React.Fragment> */}
    </>  
  );
}

// Body.defaultProps = {
//     favorList : [],
// };

export default Body;