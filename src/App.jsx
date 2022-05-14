import React, { useState } from "react";

const App = () => {

    const [st, setSt] = useState(null);
    const [color, setColor] = useState(null);

    const chageSt = (value) => {
        setSt(value);
    };

    const chageColor = (value) => {
        setColor(value);
    }
 
    return (
        <div>
            {/* Button Area */}
            <div>
                <button onClick={() => chageSt(1)}>김정우</button>
                <button onClick={() => chageSt(2)}>이유겸</button>
                <button onClick={() => chageSt(3)}>지민수</button>
            </div>

            {/* Content Area */}
            <div>
                {st === null ? <p>버튼을 클릭해주세요.</p> : ""}

                {st === 1 ? <p>테스트1</p> : ""}
                
                {st === 2 ? <p>테스트2</p> : ""}

                {st === 3 ? <p>테스트3</p> : ""}
            </div>

            {/* Color Button Area */}
            <div>
                <button onClick={() => chageColor(1)}>빨간색</button>
                <button onClick={() => chageColor(2)}>주황색</button>
                <button onClick={() => chageColor(3)}>노란색</button>
            </div>

            {/* Color Content Area */}
            <div>
                {color === null ? <p>버튼을 클릭해주세요.</p> : ""}

                {color === 1 ? <p>빨간색</p> : ""}
                
                {color === 2 ? <p>주황색</p> : ""}

                {color === 3 ? <p>노랑색</p> : ""}
            </div>
        </div>



    )
};

export default App;