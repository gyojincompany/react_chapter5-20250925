import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() { //App 컴포넌트
  // const name = "홍길동";
  // const age = 37;

  const BodyProps = {
    name : "홍길동",
    age : 37
  };

  return (
    <div className="App">
      <Header /> 
      {/* <Body name={name} age={age} /> props 내에 속성이 여러개면 불편 */}
      <Body {...BodyProps} />
      <Footer />
    </div>
  );
}

export default App;
