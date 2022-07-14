import React from 'react'; 
import { add } from "../store/til";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Detail (){

    // const til = useSelector((state) => state.til.value);
    // const [til_list, setTilList] = React.useState([]);
    //이 리스트는 배열이 될 거라서 기본값으로 배열[]을 넣어줌
    const title_ref = React.useRef(null);
    const content_ref = React.useRef(null);
    const time_ref = React.useRef(null);
    //useRef : input 요소에 접근

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addTIL = () => {  /* 버튼에 함수 연결*/
    const til_data = {
        title: title_ref.current.value,
        content: content_ref.current.value,
        time: time_ref.current.value,
    } /* 콘솔로 찍어서 확인해봤던 data 넣어줌*/
    // console.log(til_data)
    // setTilList([...til_list, til_data]) /* 지정해준 til_list 와 받아온 til_data를 배열에 담아줌  */
    dispatch(add({til_data: til_data}));
    // console.log(til_list); /*리스트 추가되는 거 콘솔로 찍어보기*/
    navigate(-1);

};
    
    return (
        <div className='save'>
            <span className='add-h3'>단어 추가하기</span>
            <div>
                <span>단어</span>
                <input ref={title_ref} /> {/*input 값을 받아옴*/}
            </div>
            
            <div>
                <span>뜻</span>
                <input ref={content_ref} />
            </div>

            <div>
                <span>예문</span>
                <input ref={time_ref} />
            </div>

            <button onClick={
                addTIL
                // console.log(title_ref.current.value, content_ref.current.value, time_ref.current.value)
                /*current의 velue 값을 받아옴(실제 입력 값) -> 콘솔로 확인해보기*/
            }>저장</button>
        </div>
    )
}

export default Detail;