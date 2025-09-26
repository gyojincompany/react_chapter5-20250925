import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Body2 from "./component/Body2";
import Body3 from "./component/Body3";
import Footer from "./component/Footer";
import Join from './component/Join';

function ChildComp() { //Body 컴포넌트에 전달할 컴포넌트
  return <div>child component</div>;
}

function App() { //App 컴포넌트
  // const name = "홍길동";
  // const age = 37;

  const BodyProps = {
    name : "홍길동",
    age : 37,
    favorList : ["파스타", "빵", "떡볶이"],
  };

  return (
    <div className="App">
      <Header /> 
      {/* <Body name={name} age={age} /> props 내에 속성이 여러개면 불편 */}
      {/* 
      <Body {...BodyProps}>
        <ChildComp />
      </Body>
      */}
      {/* <Body2></Body2> */}
      {/* <Join /> */}
      <Body3 />
      <Footer />
    </div>
  );
}

export default App;
