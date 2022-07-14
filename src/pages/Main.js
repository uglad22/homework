import React from 'react'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Main (){

    const navigate = useNavigate();
    const til_list = useSelector((state) => state.til.til_list);


    return (
        <>

            <div className='cards-box'>

                {til_list.map((til, idx) => { /* 배열을 map 함수로 펼쳐줌 */

                    return (
                        <div className='card' key={idx}> {/* 따로 붙음*/}
                            <h3>{til.title}</h3>
                            <p>{til.content}</p>
                            <p className='ex'>[예문] {til.time}</p>
                        </div>
                        //map 함수로 펼친 til 값의 title, content, time 을 불러와서 보여줌
                    )
                })}
            </div>

            <div>
                <button className='add' onClick={() => {
                    navigate("/detail")
                }}>단어추가</button>
             </div>

        </>
    )
}

export default Main;