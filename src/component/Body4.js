import { useState, useRef } from "react";

function Body4() {

    const [text, setText] = useState("");
    const textRef = useRef(); //useRef 함수가 Ref 객체를 생성->textRef에 저장

    function alertOnEvent() {
        if(text.length < 5) {       
            alert(text+"는 5글자 이하입니다. 다시 입력하세요.")     ;
            textRef.current.focus();
        } else {
            alert(text);
            setText(""); //state 변수인 text를 다시 "" 공백문자로 초기화
        }
        
        
    }

    function inputOnChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <input ref={textRef} value={text} onChange={inputOnChange} />
            <button onClick={alertOnEvent}>작성 완료</button>
        </div>
    );
}

export default Body4;