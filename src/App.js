import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function ChildComp() { //Body 컴포넌트에 전달할 컴포넌트
  return <div>child component</div>;
}

function App() { //App 컴포넌트
  // const name = "홍길동";
  // const age = 37;

  const BodyProps = {
    name : "홍길동",
    age : 37,
    //favorList : ["파스타", "빵", "떡볶이"],
  };

  return (
    <div className="App">
      <Header /> 
      {/* <Body name={name} age={age} /> props 내에 속성이 여러개면 불편 */}
      <Body {...BodyProps}>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
